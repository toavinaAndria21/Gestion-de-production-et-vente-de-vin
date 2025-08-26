import { useEffect, useState } from "react";
import { API_URL } from "../../config/api";

export default function VintageTrack() {
  const [cuvees, setCuvees] = useState([]);
  const [selectedCuveeId, setSelectedCuveeId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/vintage`)
      .then((res) => res.json())
      .then((res) => {
        setCuvees(res.data || []);
        if (res.data.length > 0) {
          setSelectedCuveeId(res.data[0].vintageId);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch des cuvées:", err);
        setLoading(false);
      });
  }, []);

  const selectedCuvee = Array.isArray(cuvees) ? cuvees.find((c) => c.vintageId === selectedCuveeId) : null;

  const formatDate = (dateString) => {
    if (!dateString) return "En cours";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR");
  };

  // Utilisation du globalProgress de l'API
  const getProgressPercentage = (cuvee) => {
    if (!cuvee) return 0;
    
    // Si la cuvée est complète, retourner 100%
    if (cuvee.isComplete) return 100;
    
    // Utiliser le globalProgress de l'API
    return cuvee.globalProgress || 0;
  };

  const getStatusColor = (isComplete) => {
    return isComplete ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800";
  };

  const getProgressColor = (percentage) => {
    if (percentage === 100) return "bg-green-500";
    if (percentage >= 70) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              <p className="text-lg text-gray-600">Chargement des cuvées...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cuvees.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-3m-13 0h3" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Aucune cuvée disponible</h2>
            <p className="text-gray-600">Commencez par créer votre première cuvée pour suivre la production.</p>
          </div>
        </div>
      </div>
    );
  }

  const progressPercentage = selectedCuvee ? getProgressPercentage(selectedCuvee) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            Suivi de Production de Vins
          </h1>
        </div>

        {/* Sélecteur de cuvée*/}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-8">
          <label
            htmlFor="cuvee-select"
            className="block text-lg font-semibold text-gray-700 mb-3"
          >
            Sélectionner une cuvée
          </label>
          <select
            id="cuvee-select"
            className="block w-full  rounded border-2 border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-4 py-2 text-lg transition-all duration-200 hover:border-gray-300"
            value={selectedCuveeId || ""}
            onChange={(e) => setSelectedCuveeId(parseInt(e.target.value))}
          >
            {cuvees.length > 0 && cuvees?.map((cuvee) => (
              <option key={cuvee.vintageId} value={cuvee.vintageId}>
                {cuvee.label} ({cuvee.quality})
              </option>
            ))}
          </select>
        </div>

        {selectedCuvee ? (
          <>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCuvee.label}</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      {selectedCuvee.quality || "N/A"}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedCuvee.isComplete)}`}>
                      {selectedCuvee.isComplete ? "Terminé" : "En cours"}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {formatDate(selectedCuvee.createdAt)}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {selectedCuvee.status}
                    </span>
                  </div>
                </div>
                
                {/* Indicateur de progression circulaire */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke={progressPercentage === 100 ? "#10b981" : "#6366f1"}
                        strokeWidth="2"
                        strokeDasharray={2 * Math.PI * 14}
                        strokeDashoffset={2 * Math.PI * 14 * (1 - progressPercentage / 100)}
                        className="transition-all duration-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700">{progressPercentage}%</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Progression</p>
                    <p>de la cuvée</p>
                  </div>
                </div>
              </div>

              {/* Barre de progression linéaire */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Avancement de la production</span>
                  <span>{progressPercentage}% complété</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ease-out ${getProgressColor(progressPercentage)}`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Section des ingrédients */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Ingrédients utilisés
                </h3>
              </div>
              
              {selectedCuvee.ingredients && selectedCuvee.ingredients.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {selectedCuvee.ingredients.map((ingredient) => (
                    <div key={ingredient.vintageIngredientId} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-800 text-lg">{ingredient.ingredient.label}</h4>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          {ingredient.ingredient.provider}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Quantité utilisée:</span>
                          <span className="font-medium">{ingredient.quantityUsed} {ingredient.ingredient.unit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stock restant:</span>
                          <span className="font-medium">{ingredient.ingredient.quantity} {ingredient.ingredient.unit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Seuil minimal:</span>
                          <span className={`font-medium ${parseFloat(ingredient.ingredient.quantity) <= parseFloat(ingredient.ingredient.threshold) ? 'text-red-600' : 'text-gray-600'}`}>
                            {ingredient.ingredient.threshold} {ingredient.ingredient.unit}
                          </span>
                        </div>
                      </div>
                      {parseFloat(ingredient.ingredient.quantity) <= parseFloat(ingredient.ingredient.threshold) && (
                        <div className="mt-3 px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-xs text-red-700 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            Stock faible !
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-600 mb-2">Aucun ingrédient disponible</p>
                  <p className="text-sm text-gray-500">Les ingrédients utilisés dans cette cuvée apparaîtront ici.</p>
                </div>
              )}
            </div>

            {/* Tableau des étapes*/}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Étapes de vinification
                </h3>
              </div>
              
              {selectedCuvee.steps && selectedCuvee.steps.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Étape</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Durée</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedCuvee.steps.map((vs, index) => (
                        <tr key={vs.vintageStepId} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                                vs.progress === 100 
                                  ? 'bg-green-500' 
                                  : vs.progress > 0
                                  ? 'bg-blue-500'
                                  : 'bg-gray-300'
                              }`}>
                                {vs.progress === 100 ? '✓' : index + 1}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{vs.step.label}</div>
                                <div className="text-xs text-gray-500">Progression: {vs.progress}%</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {vs.step.duration} {vs.step.unit}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600 max-w-xs">{vs.step.description}</div>
                            {/* Mini barre de progression pour chaque étape */}
                            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  vs.progress === 100 ? 'bg-green-500' : vs.progress > 0 ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                                style={{ width: `${vs.progress}%` }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-600 mb-2">Aucune étape disponible</p>
                  <p className="text-sm text-gray-500">Les étapes de vinification apparaîtront ici une fois configurées.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sélectionnez une cuvée</h3>
            <p className="text-gray-600">Choisissez une cuvée dans le menu déroulant pour voir tous les détails de production.</p>
          </div>
        )}
      </div>
    </div>
  );
}