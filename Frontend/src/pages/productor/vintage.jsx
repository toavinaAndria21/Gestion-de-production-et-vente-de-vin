import { useState, useEffect, useContext } from 'react';
import SearchInput from '../../components/searchInput';
import CreateVintage from '../../components/createVintage';
import { fetchAll, create, update } from '../../utils/api';
import { AuthContext } from '../../context/authContext';
import { useToast } from '../../context/toastContext';
import { Play, Pause, Square, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const DurationUnit = {
  DAYS: 'jours',
  HOURS: 'heures',
  WEEKS: 'semaines',
  MONTHS: 'mois'
};

const qualityOptions = ['Standard', 'Premium', 'Excellente', 'Bio', 'Nature'];

// États possibles d'une cuvée
const VintageStatus = {
  PENDING: 'pending',     // En attente de démarrage
  RUNNING: 'running',     // En cours
  PAUSED: 'paused',       // En pause
  COMPLETED: 'completed'  // Terminée
};

// États possibles d'une étape
const StepStatus = {
  WAITING: 'waiting',     // En attente
  RUNNING: 'running',     // En cours
  PAUSED: 'paused',       // En pause
  COMPLETED: 'completed'  // Terminée
};

export default function Vintage() {
  const { user } = useContext(AuthContext);
  const { showSucces, showError } = useToast();
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [vintages, setVintages] = useState([]);
  const [activeTab, setActiveTab] = useState('vintages');
  const [newVintage, setNewVintage] = useState({
    label: '',
    quality: 'Standard',
    selectedIngredients: [],
    selectedSteps: []
  });
  const [simulationSpeed, setSimulationSpeed] = useState(1); // 1 = temps réel, 60 = 1 minute = 1 heure
  const [searchVintageTerm, setSearchVintageTerm] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ingredientsData = await fetchAll("ingredient");
        const stepsData = await fetchAll("step");
        const vintagesData = await fetchAll("vintage");
        
        // Initialiser les états des cuvées si nécessaire
        const vintagesWithStatus = vintagesData.map(vintage => ({
          ...vintage,
          status: vintage.status || (vintage.isComplete ? VintageStatus.COMPLETED : VintageStatus.PENDING),
          steps: vintage.steps?.map((step, index) => ({
            ...step,
            status: step.status || StepStatus.WAITING,
            progress: step.progress || 0,
            startTime: step.startTime || null,
            pausedDuration: step.pausedDuration || 0,
            estimatedEndTime: step.estimatedEndTime || null
          })) || []
        }));
        
        setIngredients(ingredientsData);
        setSteps(stepsData);
        setVintages(vintagesWithStatus);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
        showError("Erreur lors du chargement des données");
      }
    };
    fetchData();
  }, []);

  // Système de progression en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setVintages(prevVintages =>
        prevVintages.map(vintage => {
          if (vintage.status !== VintageStatus.RUNNING) return vintage;

          const updatedSteps = vintage.steps.map(step => {
            if (step.status === StepStatus.RUNNING) {
              const now = Date.now();
              const elapsed = now - step.startTime - step.pausedDuration;
              const totalDuration = convertDurationToMs(step.step.duration, step.step.unit);
              const progress = Math.min(100, (elapsed / totalDuration) * 100);

              if (progress >= 100) {
                return {
                  ...step,
                  status: StepStatus.COMPLETED,
                  progress: 100,
                  endTime: now
                };
              }

              return {
                ...step,
                progress,
                estimatedEndTime: step.startTime + totalDuration + step.pausedDuration
              };
            }
            return step;
          });

          // Démarrer l'étape suivante automatiquement
          const currentStepIndex = updatedSteps.findIndex(step => step.status === StepStatus.RUNNING);
          const nextStepIndex = updatedSteps.findIndex(step => step.status === StepStatus.WAITING);
          
          if (currentStepIndex === -1 && nextStepIndex !== -1) {
            updatedSteps[nextStepIndex] = {
              ...updatedSteps[nextStepIndex],
              status: StepStatus.RUNNING,
              startTime: Date.now()
            };
          }

          // Vérifier si toutes les étapes sont terminées
          const allStepsComplete = updatedSteps.every(step => step.status === StepStatus.COMPLETED);
          const vintageStatus = allStepsComplete ? VintageStatus.COMPLETED : vintage.status;

          return {
            ...vintage,
            steps: updatedSteps,
            status: vintageStatus,
            isComplete: allStepsComplete
          };
        })
      );
    }, 100 * simulationSpeed); // Plus fréquent pour une progression fluide

    return () => clearInterval(interval);
  }, [simulationSpeed]);

  // Convertir la durée en millisecondes
  const convertDurationToMs = (duration, unit) => {
    const multipliers = {
      'minutes': 60 * 1000,
      'heures': 60 * 60 * 1000,
      'jours': 24 * 60 * 60 * 1000
    };
    return duration * (multipliers[unit] || multipliers['heures']) / simulationSpeed;
  };

  // Démarrer une cuvée
  const startVintage = async (vintageId) => {
    try {
      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map((step, index) => {
            if (index === 0) {
              return {
                ...step,
                status: StepStatus.RUNNING,
                startTime: Date.now()
              };
            }
            return step;
          });

          return {
            ...vintage,
            status: VintageStatus.RUNNING,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production démarrée !");
    } catch (error) {
      showError("Erreur lors du démarrage");
    }
  };

  // Mettre en pause une cuvée
  const pauseVintage = async (vintageId) => {
    try {
      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map(step => {
            if (step.status === StepStatus.RUNNING) {
              return {
                ...step,
                status: StepStatus.PAUSED,
                pausedAt: Date.now()
              };
            }
            return step;
          });

          return {
            ...vintage,
            status: VintageStatus.PAUSED,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production mise en pause");
    } catch (error) {
      showError("Erreur lors de la mise en pause");
    }
  };

  // Reprendre une cuvée
  const resumeVintage = async (vintageId) => {
    try {
      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map(step => {
            if (step.status === StepStatus.PAUSED) {
              const pauseDuration = Date.now() - step.pausedAt;
              return {
                ...step,
                status: StepStatus.RUNNING,
                pausedDuration: (step.pausedDuration || 0) + pauseDuration,
                pausedAt: null
              };
            }
            return step;
          });

          return {
            ...vintage,
            status: VintageStatus.RUNNING,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production reprise !");
    } catch (error) {
      showError("Erreur lors de la reprise");
    }
  };

  // Arrêter une cuvée
  const stopVintage = async (vintageId) => {
    try {
      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map(step => ({
            ...step,
            status: step.status === StepStatus.COMPLETED ? StepStatus.COMPLETED : StepStatus.WAITING,
            progress: step.status === StepStatus.COMPLETED ? step.progress : 0,
            startTime: null,
            pausedDuration: 0,
            pausedAt: null
          }));

          return {
            ...vintage,
            status: VintageStatus.PENDING,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production arrêtée");
    } catch (error) {
      showError("Erreur lors de l'arrêt");
    }
  };

  // Calculer le temps restant estimé
  const getEstimatedTimeRemaining = (vintage) => {
    if (vintage.status === VintageStatus.COMPLETED) return "Terminé";
    if (vintage.status === VintageStatus.PENDING) return "Non démarré";

    const runningStep = vintage.steps.find(step => step.status === StepStatus.RUNNING);
    if (!runningStep) return "En pause";

    const remaining = runningStep.estimatedEndTime - Date.now();
    if (remaining <= 0) return "Bientôt terminé";

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) return `${hours}h ${minutes}m restantes`;
    return `${minutes}m restantes`;
  };

  // Calculer la progression globale
  const calculateOverallProgress = (vintage) => {
    if (vintage.steps.length === 0) return 0;
    
    const totalProgress = vintage.steps.reduce((sum, step) => sum + step.progress, 0);
    return Math.round(totalProgress / vintage.steps.length);
  };

  // Obtenir l'icône de statut
  const getStatusIcon = (status) => {
    switch (status) {
      case StepStatus.COMPLETED: return <CheckCircle className="w-4 h-4 text-green-500" />;
      case StepStatus.RUNNING: return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
      case StepStatus.PAUSED: return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default: return <div className="w-4 h-4 rounded-full bg-gray-300"></div>;
    }
  };

  const reloadIngredients = async () => {
    try {
      const ingredientsData = await fetchAll("ingredient");
      setIngredients(ingredientsData);
    } catch (error) {
      console.error("Erreur lors du rechargement des ingrédients :", error);
    }
  };

  const reloadVintages = async () => {
    try {
      const vintagesData = await fetchAll("vintage");
      setVintages(vintagesData);
    } catch (error) {
      console.error("Erreur lors du rechargement des cuvées :", error);
    }
  };

  const isValidVintageName = (name) => {
    const trimmed = name.trim();
    const nameRegex = /^[a-zA-ZÀ-ÿ0-9\- ]{3,50}$/;
  
    if (!trimmed) return "Le nom ne peut pas être vide.";
    if (!nameRegex.test(trimmed)) return "Le nom doit comporter entre 3 et 50 caractères, lettres, chiffres, tirets et espaces uniquement.";
    if (vintages.some(v => v.label.toLowerCase() === trimmed.toLowerCase())) {
      return "Une cuvée avec ce nom existe déjà.";
    }
  
    return null;
  };
  
  const handleCreateVintage = async (vintageData) => {
    setIsCreating(true);

    try {
      const validationMessage = isValidVintageName(vintageData.label);
      if (validationMessage) {
        showError(validationMessage);
        setIsCreating(false);
        return;
      }

      const finalVintageData = {
        ...vintageData,
        productorId: "234234234234"
      };
      
      console.log("Données à envoyer:", finalVintageData);
      
      const createdVintage = await create("vintage", finalVintageData);
      
      await Promise.all([
        reloadIngredients(),
        reloadVintages()
      ]);

      setNewVintage({
        label: '',
        quality: 'Standard',
        selectedIngredients: [],
        selectedSteps: []
      });

      setActiveTab('vintages');
      showSucces("Cuvée créée avec succès !");

    } catch (error) {
      console.error("Erreur lors de la création de la cuvée :", error);
      showError("Erreur lors de la création de la cuvée");
    } finally {
      setIsCreating(false);
    }
  };

  const filteredVintages = vintages.filter(v =>
    v.label.toLowerCase().includes(searchVintageTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 text-white">
        <h1 className="text-2xl font-extrabold text-red-900">Gestion des Cuvées de Vin</h1>
        <div className="mt-4 flex gap-4 items-center">
          <SearchInput onChange={setSearchVintageTerm} />
          <div className="flex items-center gap-2 text-red-900">
            <label className="text-sm font-medium">Vitesse:</label>
            <select 
              value={simulationSpeed} 
              onChange={(e) => setSimulationSpeed(Number(e.target.value))}
              className="px-2 py-1 rounded border text-gray-800"
            >
              <option value={1}>Temps réel</option>
              <option value={60}>1 min = 1h</option>
              <option value={1440}>1 min = 1 jour</option>
            </select>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-5 py-2 rounded-full shadow transition ${
              activeTab === 'vintages'
                ? 'bg-red-700 text-white'
                : 'bg-white border border-red-700 text-red-700 hover:bg-red-50'
            }`}
            onClick={() => setActiveTab('vintages')}
          >
            Voir les Cuvées
          </button>
          <button
            className={`px-5 py-2 rounded-full shadow transition ${
              activeTab === 'createVintage'
                ? 'bg-red-700 text-white'
                : 'bg-white border border-red-700 text-red-700 hover:bg-red-50'
            }`}
            onClick={() => setActiveTab('createVintage')}
          >
            Nouvelle Cuvée
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl">
          {activeTab === 'vintages' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Cuvées en Production</h2>
              {filteredVintages.length === 0 ? (
                <p className="text-gray-500">Aucune cuvée trouvée.</p>
              ) : (
                <div className="space-y-6">
                  {filteredVintages.map(vintage => (
                    <div key={vintage.vintageId} className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-red-800">{vintage.label}</h3>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              vintage.status === VintageStatus.COMPLETED ? 'bg-green-100 text-green-800' :
                              vintage.status === VintageStatus.RUNNING ? 'bg-blue-100 text-blue-800' :
                              vintage.status === VintageStatus.PAUSED ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {vintage.status === VintageStatus.COMPLETED ? 'Terminée' :
                               vintage.status === VintageStatus.RUNNING ? 'En cours' :
                               vintage.status === VintageStatus.PAUSED ? 'En pause' :
                               'En attente'}
                            </span>
                          </div>
                          <p className="text-gray-700">Qualité : <strong>{vintage.quality}</strong></p>
                          <p className="text-gray-600">Créée le : {new Date(vintage.createdAt).toLocaleDateString()}</p>
                          <p className="text-gray-600 text-sm">{getEstimatedTimeRemaining(vintage)}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          {vintage.status === VintageStatus.PENDING && (
                            <button
                              onClick={() => startVintage(vintage.vintageId)}
                              className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                              title="Démarrer la production"
                            >
                              <Play className="w-4 h-4" />
                            </button>
                          )}
                          
                          {vintage.status === VintageStatus.RUNNING && (
                            <button
                              onClick={() => pauseVintage(vintage.vintageId)}
                              className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                              title="Mettre en pause"
                            >
                              <Pause className="w-4 h-4" />
                            </button>
                          )}
                          
                          {vintage.status === VintageStatus.PAUSED && (
                            <button
                              onClick={() => resumeVintage(vintage.vintageId)}
                              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                              title="Reprendre la production"
                            >
                              <Play className="w-4 h-4" />
                            </button>
                          )}
                          
                          {(vintage.status === VintageStatus.RUNNING || vintage.status === VintageStatus.PAUSED) && (
                            <button
                              onClick={() => stopVintage(vintage.vintageId)}
                              className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                              title="Arrêter la production"
                            >
                              <Square className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Barre de progression globale */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">Progression globale</span>
                          <span className="text-sm text-gray-500">{calculateOverallProgress(vintage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all duration-300 ${
                              vintage.status === VintageStatus.COMPLETED ? 'bg-green-500' :
                              vintage.status === VintageStatus.RUNNING ? 'bg-blue-500' :
                              vintage.status === VintageStatus.PAUSED ? 'bg-yellow-500' :
                              'bg-gray-400'
                            }`}
                            style={{ width: `${calculateOverallProgress(vintage)}%` }}
                          />
                        </div>
                      </div>

                      {/* Détails des étapes */}
                      {vintage.steps && vintage.steps.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-red-700 mb-3">Étapes détaillées :</h4>
                          <div className="space-y-3">
                            {vintage.steps.map((vintageStep, index) => (
                              <div key={index} className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    {getStatusIcon(vintageStep.status)}
                                    <span className="font-medium text-gray-700">
                                      {vintageStep.step?.label}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      ({vintageStep.step?.duration} {vintageStep.step?.unit})
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500">
                                    {Math.round(vintageStep.progress)}%
                                  </span>
                                </div>
                                
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                      vintageStep.status === StepStatus.COMPLETED ? 'bg-green-500' :
                                      vintageStep.status === StepStatus.RUNNING ? 'bg-blue-500' :
                                      vintageStep.status === StepStatus.PAUSED ? 'bg-yellow-500' :
                                      'bg-gray-300'
                                    }`}
                                    style={{ width: `${vintageStep.progress}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Ingrédients utilisés */}
                      {vintage.ingredients && vintage.ingredients.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-red-700 mb-2">Ingrédients utilisés :</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {vintage.ingredients.map((vintageIngredient, index) => (
                              <div key={index} className="text-sm text-gray-700 bg-gray-50 rounded px-2 py-1">
                                {vintageIngredient.ingredient?.label}: {vintageIngredient.quantityUsed} {vintageIngredient.ingredient?.unit || 'kg'}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'createVintage' && (
            <CreateVintage
              newVintage={newVintage}
              setNewVintage={setNewVintage}
              ingredients={ingredients}
              steps={steps}
              qualityOptions={qualityOptions}
              onSubmit={handleCreateVintage}
              loading={isCreating}
              onVintageCreated={() => {
                reloadIngredients();
                reloadVintages();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}