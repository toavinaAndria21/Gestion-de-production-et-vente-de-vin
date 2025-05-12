import { useState } from "react";
import { Plus, Trash2, Calendar, Wine, Check, Search, DownloadCloud } from "lucide-react";

export default function Reports() {
  // Liste des cuvées disponibles
  const [cuvees, setCuvees] = useState([
    { id: 1, nom: "Cuvée Prestige", qualite: "Excellente", dateCreation: "12/05/2025", couleur: "red" },
    { id: 2, nom: "Rosé d'Été", qualite: "Bonne", dateCreation: "12/05/2025", couleur: "pink" },
    { id: 3, nom: "Blanc de Blancs", qualite: "Exceptionnelle", dateCreation: "12/05/2025", couleur: "yellow" }
  ]);

  // Cuvée sélectionnée pour la mise en bouteille
  const [selectedCuvee, setSelectedCuvee] = useState(null);
  
  // Données du formulaire de mise en bouteille
  const [bottlingData, setBottlingData] = useState({
    dateMiseEnBouteille: "",
    nombreBouteilles: "",
    typeBouteille: "standard",
    typeEtiquette: "standard",
    lotNumber: "",
    notes: ""
  });

  // Historique des mises en bouteille
  const [bottlingHistory, setBottlingHistory] = useState([
    { 
      id: 1, 
      cuvee: "Cuvée Prestige", 
      date: "10/05/2025", 
      nombreBouteilles: 1200, 
      typeBouteille: "premium", 
      typeEtiquette: "prestige",
      lotNumber: "CP-2025-001"
    }
  ]);

  // Fonction pour sélectionner une cuvée
  const selectCuvee = (cuvee) => {
    setSelectedCuvee(cuvee);
    setBottlingData({
      ...bottlingData,
      lotNumber: `${cuvee.nom.substring(0, 2).toUpperCase()}-${new Date().getFullYear()}-${String(bottlingHistory.length + 1).padStart(3, '0')}`
    });
  };

  // Mise à jour des données du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBottlingData({
      ...bottlingData,
      [name]: value
    });
  };

  // Soumission du formulaire
  const handleSubmit = () => {
    if (!selectedCuvee || !bottlingData.dateMiseEnBouteille || !bottlingData.nombreBouteilles) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    const newBottling = {
      id: bottlingHistory.length + 1,
      cuvee: selectedCuvee.nom,
      date: bottlingData.dateMiseEnBouteille,
      nombreBouteilles: parseInt(bottlingData.nombreBouteilles),
      typeBouteille: bottlingData.typeBouteille,
      typeEtiquette: bottlingData.typeEtiquette,
      lotNumber: bottlingData.lotNumber,
      notes: bottlingData.notes
    };
    
    setBottlingHistory([...bottlingHistory, newBottling]);
    
    // Réinitialiser le formulaire
    setBottlingData({
      dateMiseEnBouteille: "",
      nombreBouteilles: "",
      typeBouteille: "standard",
      typeEtiquette: "standard",
      lotNumber: "",
      notes: ""
    });
    
    setSelectedCuvee(null);
  };

  // Génération des couleurs de fond pour les cartes de cuvées
  const getCuveeCardClass = (couleur) => {
    switch(couleur) {
      case "red": return "bg-red-100 border-l-4 border-red-800";
      case "pink": return "bg-pink-100 border-l-4 border-pink-500";
      case "yellow": return "bg-yellow-100 border-l-4 border-yellow-500";
      default: return "bg-gray-100 border-l-4 border-gray-500";
    }
  };

  return (
    <div className="w-full h-full p-4 bg-gray-50">
      <h1 className="text-xl font-bold text-red-900 mb-4">Mise en Bouteille</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sélection de la cuvée */}
        <div className="lg:col-span-1 bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Wine size={18} className="mr-2 text-red-900" />
            Sélection de la Cuvée
          </h2>
          
          <div className="mb-4">
            <div className="relative">
              <input type="text" placeholder="Rechercher une cuvée..." className="pl-8 border p-2 rounded w-full" />
              <Search size={16} className="absolute left-2 top-3 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {cuvees.map(cuvee => (
              <div 
                key={cuvee.id} 
                className={`p-3 rounded ${getCuveeCardClass(cuvee.couleur)} cursor-pointer hover:opacity-90 ${selectedCuvee?.id === cuvee.id ? 'ring-2 ring-red-900' : ''}`}
                onClick={() => selectCuvee(cuvee)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{cuvee.nom}</h3>
                    <p className="text-sm text-gray-600">Qualité: {cuvee.qualite}</p>
                    <p className="text-xs text-gray-500">Créé le: {cuvee.dateCreation}</p>
                  </div>
                  {selectedCuvee?.id === cuvee.id && (
                    <Check size={18} className="text-green-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Formulaire de mise en bouteille */}
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
            <DownloadCloud size={18} className="mr-2 text-red-900" />
            Informations de Mise en Bouteille
          </h2>
          
          {selectedCuvee ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cuvée sélectionnée</label>
                  <input 
                    type="text" 
                    value={selectedCuvee.nom} 
                    className="border p-2 rounded w-full bg-gray-100" 
                    disabled 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date de mise en bouteille*</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="dateMiseEnBouteille"
                      value={bottlingData.dateMiseEnBouteille} 
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full" 
                    />
                    <Calendar size={16} className="absolute right-2 top-3 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de bouteilles*</label>
                  <input 
                    type="number" 
                    name="nombreBouteilles"
                    value={bottlingData.nombreBouteilles} 
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de lot</label>
                  <input 
                    type="text" 
                    name="lotNumber"
                    value={bottlingData.lotNumber} 
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type de bouteille</label>
                  <select 
                    name="typeBouteille"
                    value={bottlingData.typeBouteille} 
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                  >
                    <option value="standard">Standard (75cl)</option>
                    <option value="magnum">Magnum (1.5L)</option>
                    <option value="premium">Premium (75cl)</option>
                    <option value="jeroboam">Jéroboam (3L)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type d'étiquette</label>
                  <select 
                    name="typeEtiquette"
                    value={bottlingData.typeEtiquette} 
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                  >
                    <option value="standard">Standard</option>
                    <option value="prestige">Prestige</option>
                    <option value="reserve">Réserve</option>
                    <option value="custom">Personnalisée</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea 
                  name="notes"
                  value={bottlingData.notes} 
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full h-24" 
                  placeholder="Ajoutez des notes sur cette mise en bouteille..."
                />
              </div>
              
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="mr-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
                  onClick={() => setSelectedCuvee(null)}
                >
                  Annuler
                </button>
                <button 
                  type="button" 
                  className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded flex items-center"
                  onClick={handleSubmit}
                >
                  <Plus size={18} className="mr-1" />
                  Enregistrer
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Wine size={48} className="mx-auto mb-2 text-gray-400" />
              <p>Veuillez sélectionner une cuvée pour commencer la mise en bouteille</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Historique des mises en bouteille */}
      <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
        <h2 className="font-semibold text-gray-800 p-4 border-b">Historique des mises en bouteille</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-red-900 text-white text-sm">
              <tr>
                <th className="px-4 py-2 text-left">Cuvée</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Type de bouteille</th>
                <th className="px-4 py-2 text-left">Étiquette</th>
                <th className="px-4 py-2 text-left">Lot</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {bottlingHistory.map((record) => (
                <tr key={record.id} className="border-b text-sm hover:bg-gray-50">
                  <td className="px-4 py-2">{record.cuvee}</td>
                  <td className="px-4 py-2">{record.date}</td>
                  <td className="px-4 py-2">{record.nombreBouteilles}</td>
                  <td className="px-4 py-2">{record.typeBouteille}</td>
                  <td className="px-4 py-2">{record.typeEtiquette}</td>
                  <td className="px-4 py-2">{record.lotNumber}</td>
                  <td className="px-4 py-2 text-right">
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {bottlingHistory.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    Aucun historique de mise en bouteille.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}