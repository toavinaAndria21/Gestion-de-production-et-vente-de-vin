import { useState } from 'react';

export default function VintageTrack() {
  // Données des cuvées
  const [cuvees, setCuvees] = useState([
    { 
      id: 1, 
      nom: "Grand Cru 2025", 
      cepage: "Cabernet Sauvignon", 
      dateRecolte: "2024-09-12", 
      quantite: 1200, 
      parcelle: "Coteau Sud",
      statut: "En cours",
      etapes: [
        { id: 1, nom: "Réception vendange", debut: "2024-09-12", fin: "2024-09-12", complete: true, notes: "Vendange manuelle, tri rigoureux" },
        { id: 2, nom: "Égrappage/Foulage", debut: "2024-09-12", fin: "2024-09-13", complete: true, notes: "Égrappage partiel (20% grappes entières conservées)" },
        { id: 3, nom: "Fermentation alcoolique", debut: "2024-09-14", fin: "2024-09-29", complete: true, notes: "Température contrôlée à 26°C" },
        { id: 4, nom: "Macération", debut: "2024-09-29", fin: "2024-10-10", complete: true, notes: "Macération prolongée pour maximiser l'extraction" },
        { id: 5, nom: "Pressurage", debut: "2024-10-11", fin: "2024-10-11", complete: true, notes: "Pressurage doux" },
        { id: 6, nom: "Fermentation malolactique", debut: "2024-10-12", fin: "2024-11-15", complete: true, notes: "En fûts de chêne français" },
        { id: 7, nom: "Élevage", debut: "2024-11-16", fin: null, complete: false, notes: "18 mois prévus en fûts de chêne français (50% neufs)" }
      ]
    },
    { 
      id: 2, 
      nom: "Réserve Spéciale 2025", 
      cepage: "Merlot", 
      dateRecolte: "2024-09-08", 
      quantite: 850, 
      parcelle: "Plaine Est",
      statut: "En cours",
      etapes: [
        { id: 1, nom: "Réception vendange", debut: "2024-09-08", fin: "2024-09-08", complete: true, notes: "Vendange mécanique, tri optique" },
        { id: 2, nom: "Égrappage/Foulage", debut: "2024-09-08", fin: "2024-09-09", complete: true, notes: "Égrappage total" },
        { id: 3, nom: "Fermentation alcoolique", debut: "2024-09-10", fin: "2024-09-22", complete: true, notes: "Température maintenue à 24°C" },
        { id: 4, nom: "Macération", debut: "2024-09-22", fin: "2024-10-02", complete: true, notes: "Remontages quotidiens" },
        { id: 5, nom: "Pressurage", debut: "2024-10-03", fin: "2024-10-03", complete: true, notes: "Pressurage pneumatique" },
        { id: 6, nom: "Fermentation malolactique", debut: "2024-10-04", fin: "2024-11-07", complete: true, notes: "En cuves inox" },
        { id: 7, nom: "Élevage", debut: "2024-11-08", fin: null, complete: false, notes: "12 mois prévus (70% fûts, 30% cuves)" }
      ]
    },
    { 
      id: 3, 
      nom: "Blanc de Blancs 2025", 
      cepage: "Chardonnay", 
      dateRecolte: "2024-08-28", 
      quantite: 950, 
      parcelle: "Coteau Nord",
      statut: "En cours",
      etapes: [
        { id: 1, nom: "Réception vendange", debut: "2024-08-28", fin: "2024-08-28", complete: true, notes: "Vendange nocturne, raisins refroidis" },
        { id: 2, nom: "Pressurage direct", debut: "2024-08-28", fin: "2024-08-29", complete: true, notes: "Pressurage pneumatique lent" },
        { id: 3, nom: "Débourbage", debut: "2024-08-29", fin: "2024-08-31", complete: true, notes: "48h à 12°C" },
        { id: 4, nom: "Fermentation alcoolique", debut: "2024-09-01", fin: "2024-09-15", complete: true, notes: "En fûts (40%) et cuves inox (60%) à 16°C" },
        { id: 5, nom: "Bâtonnage", debut: "2024-09-16", fin: "2024-11-15", complete: true, notes: "Bâtonnage hebdomadaire pendant 2 mois" },
        { id: 6, nom: "Élevage sur lies", debut: "2024-11-16", fin: null, complete: false, notes: "8 mois prévus" }
      ]
    },
  ]);

  // État pour suivre la cuvée sélectionnée
  const [selectedCuveeId, setSelectedCuveeId] = useState(1);
  const selectedCuvee = cuvees.find(c => c.id === selectedCuveeId);

  // Calculer le pourcentage de progression
  const calculateProgress = (etapes) => {
    if (!etapes || etapes.length === 0) return 0;
    const completed = etapes.filter(e => e.complete).length;
    return Math.round((completed / etapes.length) * 100);
  };

  // Formatage de date pour affichage
  const formatDate = (dateString) => {
    if (!dateString) return "En cours";
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  };

  // Calculer durée entre deux dates en jours
  const calculateDuration = (debut, fin) => {
    if (!debut || !fin) return "-";
    const start = new Date(debut);
    const end = new Date(fin);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} jour${diffDays > 1 ? 's' : ''}`;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Suivi de Production de Vins</h1>
      
      {/* Sélecteur de cuvée */}
      <div className="mb-6">
        <label htmlFor="cuvee-select" className="block text-sm font-medium text-gray-700 mb-2">
          Sélectionner une cuvée
        </label>
        <select
          id="cuvee-select"
          className="block w-full md:w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
          value={selectedCuveeId}
          onChange={(e) => setSelectedCuveeId(parseInt(e.target.value))}
        >
          {cuvees.map(cuvee => (
            <option key={cuvee.id} value={cuvee.id}>
              {cuvee.nom} - {cuvee.cepage}
            </option>
          ))}
        </select>
      </div>
      
      {selectedCuvee && (
        <>
          {/* Informations sur la cuvée */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedCuvee.nom}</h2>
                <div className="space-y-2">
                  <p><span className="font-medium text-gray-600">Cépage:</span> {selectedCuvee.cepage}</p>
                  <p><span className="font-medium text-gray-600">Parcelle:</span> {selectedCuvee.parcelle}</p>
                  <p><span className="font-medium text-gray-600">Date de récolte:</span> {formatDate(selectedCuvee.dateRecolte)}</p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="text-lg font-semibold">État d'avancement</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    selectedCuvee.statut === "Terminé" ? "bg-green-100 text-green-800" : 
                    "bg-amber-100 text-amber-800"
                  }`}>
                    {selectedCuvee.statut}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500" 
                    style={{ width: `${calculateProgress(selectedCuvee.etapes)}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {calculateProgress(selectedCuvee.etapes)}% terminé 
                  ({selectedCuvee.etapes.filter(e => e.complete).length}/{selectedCuvee.etapes.length} étapes)
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Détails de production</h3>
                <div className="space-y-2">
                  <p><span className="font-medium text-gray-600">Quantité:</span> {selectedCuvee.quantite} litres</p>
                  <p><span className="font-medium text-gray-600">Potentiel estimé:</span> {Math.round(selectedCuvee.quantite * 0.75)} bouteilles</p>
                  <p><span className="font-medium text-gray-600">Début vinification:</span> {formatDate(selectedCuvee.etapes[0]?.debut)}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Étapes de vinification */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="text-xl font-semibold p-4 border-b">Processus de Vinification</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Étape</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date début</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date fin</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durée</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {selectedCuvee.etapes.map((etape) => (
                    <tr key={etape.id} className="hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm font-medium text-gray-900">{etape.nom}</td>
                      <td className="py-4 px-4 text-sm text-gray-500">{formatDate(etape.debut)}</td>
                      <td className="py-4 px-4 text-sm text-gray-500">{formatDate(etape.fin)}</td>
                      <td className="py-4 px-4 text-sm text-gray-500">{calculateDuration(etape.debut, etape.fin)}</td>
                      <td className="py-4 px-4 text-sm">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          etape.complete ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}>
                          {etape.complete ? "Terminé" : "En cours"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">{etape.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Notes d'analyse et conseils */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-3 border-b pb-2">Points de surveillance</h3>
              <ul className="space-y-2 text-sm">
                {selectedCuvee.id === 1 && (
                  <>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Surveiller la température des fûts pendant l'élevage (idéalement 14-16°C)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Contrôle mensuel des niveaux de SO2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Ouillage prévu le 15/06/2025</span>
                    </li>
                  </>
                )}
                {selectedCuvee.id === 2 && (
                  <>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Surveiller les risques de contamination bactérienne</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Dégustation de contrôle prévue le 02/06/2025</span>
                    </li>
                  </>
                )}
                {selectedCuvee.id === 3 && (
                  <>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>Surveiller l'oxydation pendant l'élevage sur lies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Bâtonnage à réduire si arômes d'amande trop prononcés</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-3 border-b pb-2">Prévisions et planning</h3>
              <ul className="space-y-2 text-sm">
                {selectedCuvee.id === 1 && (
                  <>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Fin d'élevage prévue pour mai 2026</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Assemblage final et mise en bouteille en juin 2026</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Repos en bouteille minimum 6 mois avant commercialisation</span>
                    </li>
                  </>
                )}
                {selectedCuvee.id === 2 && (
                  <>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Fin d'élevage prévue pour novembre 2025</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Mise en bouteille décembre 2025</span>
                    </li>
                  </>
                )}
                {selectedCuvee.id === 3 && (
                  <>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Fin d'élevage prévue pour juillet 2025</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Préparation et mise en bouteille en août 2025</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Commercialisation possible dès octobre 2025</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}