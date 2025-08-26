import { useState, useEffect, useContext } from 'react';
import SearchInput from '../../components/searchInput';
import CreateVintage from '../../components/createVintage';
import EditVintage from '../../components/editVintage';
import ConfirmDeleteModal from '../../components/confirmDeleteModal';
import { fetchAll, create, update, remove } from '../../utils/api';
import { AuthContext } from '../../context/authContext';
import { useToast } from '../../context/toastContext';
import { Play, Pause, Square, Clock, CheckCircle, AlertCircle, Edit, Trash2, X } from 'lucide-react';

const DurationUnit = {
  DAYS: 'jours',
  HOURS: 'heures',
  WEEKS: 'semaines',
  MONTHS: 'mois'
};

const qualityOptions = ['Standard', 'Premium', 'Excellente', 'Bio', 'Nature'];

// États possibles d'une cuvée selon le schéma Prisma
const VintageStatus = {
  CREATED: 'Created',
  LAUNCHED: 'Launched', 
  PAUSED: 'Paused',
  CANCELLED: 'Cancelled'
};

// États pour l'interface utilisateur
const UIStatus = {
  PENDING: 'pending',
  RUNNING: 'running',
  PAUSED: 'paused',
  COMPLETED: 'completed'
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
  const [editingVintage, setEditingVintage] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [searchVintageTerm, setSearchVintageTerm] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ingredientsData = await fetchAll("ingredient");
        const stepsData = await fetchAll("step");
        const vintagesData = await fetchAll("vintage");
        
        // Adapter les données pour l'interface
        const vintagesWithStatus = vintagesData.map(vintage => ({
          ...vintage,
          uiStatus: mapPrismaStatusToUI(vintage.status, vintage.isComplete),
          globalProgress: vintage.globalProgress || 0,
          steps: vintage.steps?.map((vintageStep) => ({
            ...vintageStep,
            uiStatus: calculateStepUIStatus(vintageStep.progress),
            startTime: vintageStep.startTime || null,
            pausedDuration: vintageStep.pausedDuration || 0,
            estimatedEndTime: vintageStep.estimatedEndTime || null
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

  // Mapper les statuts Prisma vers les statuts UI
  const mapPrismaStatusToUI = (prismaStatus, isComplete) => {
    if (isComplete) return UIStatus.COMPLETED;
    
    switch (prismaStatus) {
      case VintageStatus.CREATED:
        return UIStatus.PENDING;
      case VintageStatus.LAUNCHED:
        return UIStatus.RUNNING;
      case VintageStatus.PAUSED:
        return UIStatus.PAUSED;
      case VintageStatus.CANCELLED:
        return UIStatus.PENDING;
      default:
        return UIStatus.PENDING;
    }
  };

  // Calculer le statut UI d'une étape basé sur sa progression
  const calculateStepUIStatus = (progress) => {
    if (progress >= 100) return UIStatus.COMPLETED;
    if (progress > 0) return UIStatus.RUNNING;
    return UIStatus.PENDING;
  };

  // Vérifications pour les actions
  const canEditVintage = (vintage) => {
    return vintage.uiStatus === UIStatus.PENDING || vintage.uiStatus === UIStatus.COMPLETED;
  };

  const canDeleteVintage = (vintage) => {
    return vintage.uiStatus !== UIStatus.RUNNING;
  };

  // Système de progression en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setVintages(prevVintages =>
        prevVintages.map(vintage => {
          if (vintage.uiStatus !== UIStatus.RUNNING) return vintage;

          let hasChanges = false;
          const updatedSteps = vintage.steps.map(step => {
            if (step.uiStatus === UIStatus.RUNNING && step.progress < 100) {
              const now = Date.now();
              const elapsed = now - (step.startTime || now) - step.pausedDuration;
              const totalDuration = convertDurationToMs(step.step.duration, step.step.unit);
              const newProgress = Math.min(100, (elapsed / totalDuration) * 100);

              if (newProgress !== step.progress) {
                hasChanges = true;
                return {
                  ...step,
                  progress: newProgress,
                  uiStatus: newProgress >= 100 ? UIStatus.COMPLETED : UIStatus.RUNNING,
                  estimatedEndTime: step.startTime + totalDuration + step.pausedDuration
                };
              }
            }
            return step;
          });

          if (hasChanges) {
            // Démarrer l'étape suivante si l'actuelle est terminée
            const currentStepIndex = updatedSteps.findIndex(step => step.uiStatus === UIStatus.RUNNING);
            const nextStepIndex = updatedSteps.findIndex(step => step.uiStatus === UIStatus.PENDING);
            
            if (currentStepIndex === -1 && nextStepIndex !== -1) {
              updatedSteps[nextStepIndex] = {
                ...updatedSteps[nextStepIndex],
                uiStatus: UIStatus.RUNNING,
                startTime: Date.now()
              };
            }

            // Calculer la progression globale
            const totalProgress = updatedSteps.reduce((sum, step) => sum + step.progress, 0);
            const globalProgress = Math.round(totalProgress / updatedSteps.length);

            // Vérifier si toutes les étapes sont terminées
            const allStepsComplete = updatedSteps.every(step => step.progress >= 100);
            const newUIStatus = allStepsComplete ? UIStatus.COMPLETED : vintage.uiStatus;

            // Sauvegarder en base de données de façon asynchrone
            if (globalProgress !== vintage.globalProgress) {
              updateVintageProgress(vintage.vintageId, globalProgress, allStepsComplete, updatedSteps);
            }

            return {
              ...vintage,
              steps: updatedSteps,
              uiStatus: newUIStatus,
              globalProgress,
              isComplete: allStepsComplete
            };
          }

          return vintage;
        })
      );
    }, 100 * simulationSpeed);

    return () => clearInterval(interval);
  }, [simulationSpeed]);

  // Fonction pour sauvegarder la progression en base
  const updateVintageProgress = async (vintageId, globalProgress, isComplete, steps) => {
    try {
      await update("vintage", vintageId, {
        globalProgress,
        isComplete,
        status: isComplete ? VintageStatus.CREATED : VintageStatus.LAUNCHED
      });

      for (const step of steps) {
        if (step.vintageStepId) {
          await update("vintageStep", step.vintageStepId, {
            progress: Math.round(step.progress)
          });
        }
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la progression :", error);
    }
  };

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
      await update("vintage", vintageId, {
        status: VintageStatus.LAUNCHED
      });

      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map((step, index) => {
            if (index === 0) {
              return {
                ...step,
                uiStatus: UIStatus.RUNNING,
                startTime: Date.now()
              };
            }
            return step;
          });

          return {
            ...vintage,
            uiStatus: UIStatus.RUNNING,
            status: VintageStatus.LAUNCHED,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production démarrée !");
    } catch (error) {
      console.error("Erreur lors du démarrage:", error);
      showError(`Erreur lors du démarrage: ${error.message}`);
    }
  };

  // Mettre en pause une cuvée
  const pauseVintage = async (vintageId) => {
    try {
      await update("vintage", vintageId, {
        status: VintageStatus.PAUSED
      });

      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map(step => {
            if (step.uiStatus === UIStatus.RUNNING) {
              return {
                ...step,
                uiStatus: UIStatus.PAUSED,
                pausedAt: Date.now()
              };
            }
            return step;
          });

          return {
            ...vintage,
            uiStatus: UIStatus.PAUSED,
            status: VintageStatus.PAUSED,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production mise en pause");
    } catch (error) {
      console.error("Erreur lors de la mise en pause:", error);
      showError(`Erreur lors de la mise en pause: ${error.message}`);
    }
  };

  // Reprendre une cuvée
  const resumeVintage = async (vintageId) => {
    try {
      await update("vintage", vintageId, {
        status: VintageStatus.LAUNCHED
      });

      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map(step => {
            if (step.uiStatus === UIStatus.PAUSED) {
              const pauseDuration = Date.now() - step.pausedAt;
              return {
                ...step,
                uiStatus: UIStatus.RUNNING,
                pausedDuration: (step.pausedDuration || 0) + pauseDuration,
                pausedAt: null
              };
            }
            return step;
          });

          return {
            ...vintage,
            uiStatus: UIStatus.RUNNING,
            status: VintageStatus.LAUNCHED,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production reprise !");
    } catch (error) {
      console.error("Erreur lors de la reprise:", error);
      showError(`Erreur lors de la reprise: ${error.message}`);
    }
  };

  // Arrêter une cuvée
  const stopVintage = async (vintageId) => {
    try {
      await update("vintage", vintageId, {
        status: VintageStatus.CREATED,
        globalProgress: 0
      });

      const updatedVintages = vintages.map(vintage => {
        if (vintage.vintageId === vintageId) {
          const updatedSteps = vintage.steps.map(step => ({
            ...step,
            uiStatus: UIStatus.PENDING,
            progress: 0,
            startTime: null,
            pausedDuration: 0,
            pausedAt: null
          }));

          return {
            ...vintage,
            uiStatus: UIStatus.PENDING,
            status: VintageStatus.CREATED,
            globalProgress: 0,
            steps: updatedSteps
          };
        }
        return vintage;
      });
      
      setVintages(updatedVintages);
      showSucces("Production arrêtée");
    } catch (error) {
      console.error("Erreur lors de l'arrêt:", error);
      showError(`Erreur lors de l'arrêt: ${error.message}`);
    }
  };

  // FONCTION DE SUPPRESSION CORRIGÉE
  const deleteVintage = async (vintageId) => {
    console.log(`Tentative de suppression de la cuvée ID: ${vintageId}`);
    try {
      await remove("vintage", vintageId);
      console.log(`Cuvée ${vintageId} supprimée avec succès`);
      
      // Mise à jour immédiate de l'état local
      setVintages(prevVintages => 
        prevVintages.filter(v => v.vintageId !== vintageId)
      );
      
      setShowDeleteConfirm(null);
      showSucces("Cuvée supprimée avec succès !");
      
      // Recharger les ingrédients car les quantités ont été restaurées
      await reloadIngredients();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      setShowDeleteConfirm(null);
      showError(`Erreur lors de la suppression : ${error.message}`);
    }
  };

  // FONCTION DE MODIFICATION CORRIGÉE
  const handleEditVintage = async (vintageId, updatedData) => {
    console.log(`Tentative de modification de la cuvée ID: ${vintageId}`, updatedData);
    setIsUpdating(true);
    
    try {
      // Validation du nom
      const validationMessage = isValidVintageName(updatedData.label, vintageId);
      if (validationMessage) {
        showError(validationMessage);
        return;
      }

      // Préparer les données pour l'API (ne garder que les champs modifiables)
      const dataToUpdate = {
        label: updatedData.label?.trim(),
        quality: updatedData.quality
      };

      const updatedVintage = await update("vintage", vintageId, dataToUpdate);
      console.log(`Cuvée ${vintageId} modifiée avec succès:`, updatedVintage);
      
      // Mise à jour immédiate de l'état local
      setVintages(prevVintages =>
        prevVintages.map(vintage =>
          vintage.vintageId === vintageId
            ? { ...vintage, ...dataToUpdate }
            : vintage
        )
      );
      
      setEditingVintage(null);
      showSucces("Cuvée modifiée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
      showError(`Erreur lors de la modification : ${error.message}`);
    } finally {
      setIsUpdating(false);
    }
  };

  // Calculer le temps restant estimé
  const getEstimatedTimeRemaining = (vintage) => {
    if (vintage.uiStatus === UIStatus.COMPLETED) return "Terminé";
    if (vintage.uiStatus === UIStatus.PENDING) return "Non démarré";

    const runningStep = vintage.steps.find(step => step.uiStatus === UIStatus.RUNNING);
    if (!runningStep) return "En pause";

    const remaining = runningStep.estimatedEndTime - Date.now();
    if (remaining <= 0) return "Bientôt terminé";

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) return `${hours}h ${minutes}m restantes`;
    return `${minutes}m restantes`;
  };

  // Obtenir l'icône de statut
  const getStatusIcon = (status) => {
    switch (status) {
      case UIStatus.COMPLETED: return <CheckCircle className="w-4 h-4 text-green-500" />;
      case UIStatus.RUNNING: return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
      case UIStatus.PAUSED: return <AlertCircle className="w-4 h-4 text-yellow-500" />;
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
      const vintagesWithStatus = vintagesData.map(vintage => ({
        ...vintage,
        uiStatus: mapPrismaStatusToUI(vintage.status, vintage.isComplete),
        globalProgress: vintage.globalProgress || 0,
        steps: vintage.steps?.map((vintageStep) => ({
          ...vintageStep,
          uiStatus: calculateStepUIStatus(vintageStep.progress),
          startTime: vintageStep.startTime || null,
          pausedDuration: vintageStep.pausedDuration || 0,
          estimatedEndTime: vintageStep.estimatedEndTime || null
        })) || []
      }));
      setVintages(vintagesWithStatus);
    } catch (error) {
      console.error("Erreur lors du rechargement des cuvées :", error);
    }
  };

  const isValidVintageName = (name, excludeId = null) => {
    if (!name) return "Le nom ne peut pas être vide.";
    
    const trimmed = name.trim();
    const nameRegex = /^[a-zA-ZÀ-ÿ0-9\- ]{3,50}$/;
  
    if (!trimmed) return "Le nom ne peut pas être vide.";
    if (!nameRegex.test(trimmed)) return "Le nom doit comporter entre 3 et 50 caractères, lettres, chiffres, tirets et espaces uniquement.";
    if (vintages.some(v => v.label.toLowerCase() === trimmed.toLowerCase() && v.vintageId !== excludeId)) {
      return "Une cuvée avec ce nom existe déjà.";
    }
  
    return null;
  };
  
  const handleCreateVintage = async (vintageData) => {
    setIsCreating(true);
  
    try {

      // Validation du nom
      const validationMessage = isValidVintageName(vintageData.label);
      if (validationMessage) {
        showError(validationMessage);
        return;
      }
  
      // Vérification des données requises
      if (!vintageData.steps || vintageData.steps.length === 0) {
        showError("Veuillez sélectionner au moins une étape");
        return;
      }
  
      if (!vintageData.ingredients || vintageData.ingredients.length === 0) {
        showError("Veuillez sélectionner au moins un ingrédient");
        return;
      }
  
      // Formatage des données pour correspondre à ce qu'attend le service
      const finalVintageData = {
        productorId: user.personnelId,
        label: vintageData.label.trim(),
        quality: vintageData.quality,
        globalProgress: 0,
        status: VintageStatus.CREATED,
        isComplete: false,
        
        // Formatage des étapes
        steps: vintageData.steps.map(step => ({
          stepId: step.stepId || step.id
        })),
        
        // Formatage des ingrédients
        ingredients: vintageData.ingredients.map(ingredient => ({
          ingredientId: ingredient.ingredientId || ingredient.id,
          quantityUsed: ingredient.quantityUsed || ingredient.quantity || 1
        }))
      };
  
      console.log("Données finales envoyées:", JSON.stringify(finalVintageData, null, 2));
  
      // Vérification finale des quantités d'ingrédients
      for (const ing of finalVintageData.ingredients) {
        if (!ing.quantityUsed || ing.quantityUsed <= 0) {
          showError(`Quantité manquante ou invalide pour l'ingrédient ${ing.ingredientId}`);
          return;
        }
        
        const availableIngredient = ingredients.find(i => i.ingredientId === ing.ingredientId);
        if (availableIngredient && Number(availableIngredient.quantity) < ing.quantityUsed) {
          showError(`Stock insuffisant pour ${availableIngredient.label}. Disponible: ${availableIngredient.quantity}, Demandé: ${ing.quantityUsed}`);
          return;
        }
      }
  
      // Appel à l'API
      const createdVintage = await create("vintage", finalVintageData);
      console.log("Cuvée créée:", createdVintage);
      
      // Rechargement des données
      await Promise.all([
        reloadIngredients(),
        reloadVintages()
      ]);
  
      // Reset du formulaire
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
      
      let errorMessage = "Erreur lors de la création de la cuvée";
      if (error.message) {
        if (error.message.includes("Stock insuffisant")) {
          errorMessage = error.message;
        } else if (error.message.includes("introuvable")) {
          errorMessage = "Un des ingrédients ou étapes sélectionnés n'existe pas";
        } else if (error.message.includes("Quantité utilisée manquante")) {
          errorMessage = "Quantité manquante pour un ingrédient";
        } else {
          errorMessage = `Erreur: ${error.message}`;
        }
      }
      
      showError(errorMessage);
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
                              vintage.uiStatus === UIStatus.COMPLETED ? 'bg-green-100 text-green-800' :
                              vintage.uiStatus === UIStatus.RUNNING ? 'bg-blue-100 text-blue-800' :
                              vintage.uiStatus === UIStatus.PAUSED ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {vintage.uiStatus === UIStatus.COMPLETED ? 'Terminée' :
                               vintage.uiStatus === UIStatus.RUNNING ? 'En cours' :
                               vintage.uiStatus === UIStatus.PAUSED ? 'En pause' :
                               'En attente'}
                            </span>
                          </div>
                          <p className="text-gray-700">Qualité : <strong>{vintage.quality}</strong></p>
                          <p className="text-gray-600">Créée le : {new Date(vintage.createdAt).toLocaleDateString()}</p>
                          <p className="text-gray-600 text-sm">{getEstimatedTimeRemaining(vintage)}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          {/* Boutons de contrôle de production */}
                          {vintage.uiStatus === UIStatus.PENDING && (
                            <button
                              onClick={() => startVintage(vintage.vintageId)}
                              className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                              title="Démarrer la production"
                            >
                              <Play className="w-4 h-4" />
                            </button>
                          )}
                          
                          {vintage.uiStatus === UIStatus.RUNNING && (
                            <button
                              onClick={() => pauseVintage(vintage.vintageId)}
                              className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                              title="Mettre en pause"
                            >
                              <Pause className="w-4 h-4" />
                            </button>
                          )}
                          
                          {vintage.uiStatus === UIStatus.PAUSED && (
                            <button
                              onClick={() => resumeVintage(vintage.vintageId)}
                              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                              title="Reprendre la production"
                            >
                              <Play className="w-4 h-4" />
                            </button>
                          )}
                          
                          {(vintage.uiStatus === UIStatus.RUNNING || vintage.uiStatus === UIStatus.PAUSED) && (
                            <button
                              onClick={() => stopVintage(vintage.vintageId)}
                              className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                              title="Arrêter la production"
                            >
                              <Square className="w-4 h-4" />
                            </button>
                          )}

                          {/* Boutons d'édition et suppression avec vérifications */}
                          <button
                            onClick={() => {
                              if (!canEditVintage(vintage)) {
                                showError("Impossible de modifier une cuvée en cours de production.");
                                return;
                              }
                              setEditingVintage(vintage);
                            }}
                            className={`p-2 rounded transition ${
                              canEditVintage(vintage) 
                                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            title={canEditVintage(vintage) ? "Modifier la cuvée" : "Modification impossible (production en cours)"}
                            disabled={!canEditVintage(vintage)}
                          >
                            <Edit className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => {
                              if (!canDeleteVintage(vintage)) {
                                showError("Impossible de supprimer une cuvée en cours de production. Veuillez d'abord l'arrêter.");
                                return;
                              }
                              setShowDeleteConfirm(vintage);
                            }}
                            className={`p-2 rounded transition ${
                              canDeleteVintage(vintage)
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            title={canDeleteVintage(vintage) ? "Supprimer la cuvée" : "Suppression impossible (production en cours)"}
                            disabled={!canDeleteVintage(vintage)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Barre de progression globale */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">Progression globale</span>
                          <span className="text-sm text-gray-500">{vintage.globalProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all duration-300 ${
                              vintage.uiStatus === UIStatus.COMPLETED ? 'bg-green-500' :
                              vintage.uiStatus === UIStatus.RUNNING ? 'bg-blue-500' :
                              vintage.uiStatus === UIStatus.PAUSED ? 'bg-yellow-500' :
                              'bg-gray-400'
                            }`}
                            style={{ width: `${vintage.globalProgress}%` }}
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
                                    {getStatusIcon(vintageStep.uiStatus)}
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
                                      vintageStep.uiStatus === UIStatus.COMPLETED ? 'bg-green-500' :
                                      vintageStep.uiStatus === UIStatus.RUNNING ? 'bg-blue-500' :
                                      vintageStep.uiStatus === UIStatus.PAUSED ? 'bg-yellow-500' :
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

        {/* Modal d'édition */}
        {editingVintage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Modifier la cuvée</h3>
                <button
                  onClick={() => setEditingVintage(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <EditVintage
                vintage={editingVintage}
                ingredients={ingredients}
                steps={steps}
                qualityOptions={qualityOptions}
                onSubmit={(updatedData) => handleEditVintage(editingVintage.vintageId, updatedData)}
                onCancel={() => setEditingVintage(null)}
                loading={isUpdating}
              />
            </div>
          </div>
        )}

        {/* Modal de confirmation de suppression avec ConfirmDeleteModal */}
        <ConfirmDeleteModal
          isOpen={!!showDeleteConfirm}
          onClose={() => setShowDeleteConfirm(null)}
          onConfirm={() => deleteVintage(showDeleteConfirm.vintageId)}
          message={showDeleteConfirm ? 
            `Êtes-vous sûr de vouloir supprimer la cuvée "${showDeleteConfirm.label}" ? Cette action est irréversible et restaurera les quantités d'ingrédients utilisés.` 
            : ""
          }
        />
      </div>
    </div>
  );
}