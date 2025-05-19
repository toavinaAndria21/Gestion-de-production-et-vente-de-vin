import { useState, useEffect } from 'react';
import SearchInput from '../../components/searchInput';
import CreateVintage from '../../components/createVintage';
import { fetchAll } from '../../utils/api';

const DurationUnit = {
  DAYS: 'jours',
  HOURS: 'heures',
  WEEKS: 'semaines',
  MONTHS: 'mois'
};

const qualityOptions = ['Standard', 'Premium', 'Excellente', 'Bio', 'Nature'];

export default function Vintage() {
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
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchVintageTerm, setSearchVintageTerm] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ingredientsData = await fetchAll("ingredient");
        const stepsData = await fetchAll("step");
        setIngredients(ingredientsData);
        setSteps(stepsData);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => {
        const newTime = new Date(prevTime);
        newTime.setDate(newTime.getDate() + 1 * simulationSpeed);
        return newTime;
      });

      setVintages(prevVintages =>
        prevVintages.map(vintage => {
          if (!vintage.isComplete) {
            const updatedSteps = vintage.steps.map(step => {
              if (!step.isComplete) {
                const daysPassed = Math.floor((currentTime - new Date(step.startDate)) / (1000 * 60 * 60 * 24 * (1 / simulationSpeed)));
                if (daysPassed >= step.duration) {
                  return { ...step, isComplete: true, endDate: new Date() };
                }
                return step;
              }
              return step;
            });
            const allStepsComplete = updatedSteps.every(step => step.isComplete);
            return {
              ...vintage,
              steps: updatedSteps,
              isComplete: allStepsComplete,
              completionDate: allStepsComplete ? new Date() : null
            };
          }
          return vintage;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [simulationSpeed, currentTime]);

  const isValidVintageName = (name) => {
    const trimmed = name.trim();
    const nameRegex = /^[a-zA-ZÀ-ÿ0-9\- ]{3,50}$/;
  
    if (!trimmed) return "Le nom ne peut pas être vide.";
    if (!nameRegex.test(trimmed)) return "Le nom doit comporter entre 3 et 50 caractères, lettres, chiffres, tirets et espaces uniquement.";
    if (vintages.some(v => v.label.toLowerCase() === trimmed.toLowerCase())) {
      return "Une cuvée avec ce nom existe déjà.";
    }
  
    return null; // valide
  };
  
  const handleCreateVintage = () => {
    const validationMessage = isValidVintageName(newVintage.label);
    if (validationMessage) {
      alert(validationMessage);
      return;
    }
    if (newVintage.selectedIngredients.length === 0 || newVintage.selectedSteps.length === 0) {
      alert("Veuillez sélectionner au moins un ingrédient et une étape.");
      return;
    }
    

    setIsCreating(true);

    const newVintageSteps = newVintage.selectedSteps.map(stepId => {
      const step = steps.find(s => s.stepId === stepId);
      return {
        stepId,
        label: step.label,
        duration: step.duration,
        unit: step.unit,
        description: step.description,
        isComplete: false,
        startDate: new Date(),
        progress: 0
      };
    });

    const vintageToAdd = {
      vintageId: Date.now(), // identifiant unique temporaire
      productorId: "P001",
      label: newVintage.label,
      quality: newVintage.quality,
      createdAt: new Date(),
      ingredients: newVintage.selectedIngredients.map(id =>
        ingredients.find(ing => ing.ingredientId === id)
      ),
      steps: newVintageSteps,
      isComplete: false
    };

    setTimeout(() => {
      setVintages([...vintages, vintageToAdd]);
      setNewVintage({
        label: '',
        quality: 'Standard',
        selectedIngredients: [],
        selectedSteps: []
      });
      setActiveTab('vintages');
      setIsCreating(false);
    }, 500); // petite animation de chargement
  };

  const calculateVintageProgress = (vintage) => {
    if (vintage.isComplete) return 100;
    if (vintage.steps.length === 0) return 0;

    const completedSteps = vintage.steps.filter(step => step.isComplete).length;
    let progress = (completedSteps / vintage.steps.length) * 100;

    if (completedSteps < vintage.steps.length) {
      const currentStep = vintage.steps.find(step => !step.isComplete);
      if (currentStep) {
        const daysPassed = Math.floor((currentTime - new Date(currentStep.startDate)) / (1000 * 60 * 60 * 24));
        const stepProgress = Math.min(100, (daysPassed / currentStep.duration) * 100);
        const stepWeight = 1 / vintage.steps.length;
        progress += stepProgress * stepWeight;
      }
    }

    return Math.min(100, Math.round(progress));
  };

  const filteredVintages = vintages.filter(v =>
    v.label.toLowerCase().includes(searchVintageTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 text-white">
        <h1 className="text-2xl font-extrabold text-red-900">Gestion des Cuvées de Vin</h1>
        <div className="mt-4">
          <SearchInput onChange={setSearchVintageTerm} />
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
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-red-800">{vintage.label}</h3>
                        <span className={`px-3 py-1 text-sm rounded-full ${
                          vintage.isComplete ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {vintage.isComplete ? 'Terminée' : 'En cours'}
                        </span>
                      </div>
                      <p className="text-gray-700">Qualité : <strong>{vintage.quality}</strong></p>
                      <p className="text-gray-600">Créée le : {new Date(vintage.createdAt).toLocaleDateString()}</p>
                      {vintage.isComplete && (
                        <p className="text-gray-600">Terminée le : {new Date(vintage.completionDate).toLocaleDateString()}</p>
                      )}

                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-red-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${calculateVintageProgress(vintage)}%` }}
                          />
                        </div>
                        <p className="text-sm text-right text-gray-500 mt-1">
                          {calculateVintageProgress(vintage)}% terminé
                        </p>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold text-red-700 mb-2">Étapes :</h4>
                        <ul className="space-y-1">
                          {vintage.steps.map((step, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                                step.isComplete ? 'bg-green-500' : 'bg-yellow-500'
                              }`}></span>
                              {step.label} ({step.duration} {step.unit})
                            </li>
                          ))}
                        </ul>
                      </div>
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
            />
          )}
        </div>
      </div>
    </div>
  );
}
