import { useState } from "react";
import { Plus, Calendar, Wine, Package, Tag } from "lucide-react";
import DataTable from "../../components/newDataTable";

export default function Bottling() {
  const [editData, setEditData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Liste des cuvées disponibles
  const [cuvees, setCuvees] = useState([
    { id: 1, nom: "Cuvée Prestige", qualite: "Excellente", dateCreation: "12/05/2025", couleur: "red" },
    { id: 2, nom: "Rosé d'Été", qualite: "Bonne", dateCreation: "12/05/2025", couleur: "pink" },
    { id: 3, nom: "Blanc de Blancs", qualite: "Exceptionnelle", dateCreation: "12/05/2025", couleur: "yellow" },
    { id: 4, nom: "Cuvée Tradition", qualite: "Excellente", dateCreation: "12/05/2025", couleur: "red" },
    { id: 5, nom: "Rosé Premium", qualite: "Bonne", dateCreation: "12/05/2025", couleur: "pink" },
    { id: 6, nom: "Chardonnay", qualite: "Exceptionnelle", dateCreation: "12/05/2025", couleur: "yellow" },
  ]);

  // Cuvée sélectionnée pour la mise en bouteille
  const [selectedCuvee, setSelectedCuvee] = useState(null);
  
  // Données du formulaire de mise en bouteille
  const [bottlingData, setBottlingData] = useState({
    dateMiseEnBouteille: new Date().toISOString().split('T')[0],
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
      lotNumber: "CP-2025-001",
      notes: "Première mise en bouteille de l'année"
    },
    { 
      id: 2, 
      cuvee: "Rosé d'Été", 
      date: "08/05/2025", 
      nombreBouteilles: 800, 
      typeBouteille: "standard", 
      typeEtiquette: "standard",
      lotNumber: "RE-2025-002",
      notes: "Excellent millésime"
    },
    { 
      id: 3, 
      cuvee: "Blanc de Blancs", 
      date: "05/05/2025", 
      nombreBouteilles: 1500, 
      typeBouteille: "magnum", 
      typeEtiquette: "reserve",
      lotNumber: "BB-2025-003",
      notes: "Édition limitée"
    },
    { 
      id: 4, 
      cuvee: "Cuvée Prestige", 
      date: "01/05/2025", 
      nombreBouteilles: 600, 
      typeBouteille: "jeroboam", 
      typeEtiquette: "prestige",
      lotNumber: "CP-2025-004",
      notes: "Format spécial pour événements"
    },
    { 
      id: 5, 
      cuvee: "Rosé d'Été", 
      date: "28/04/2025", 
      nombreBouteilles: 900, 
      typeBouteille: "standard", 
      typeEtiquette: "custom",
      lotNumber: "RE-2025-005",
      notes: "Étiquette personnalisée client"
    },
    { 
      id: 6, 
      cuvee: "Chardonnay", 
      date: "25/04/2025", 
      nombreBouteilles: 1100, 
      typeBouteille: "premium", 
      typeEtiquette: "standard",
      lotNumber: "CH-2025-006",
      notes: "Assemblage final validé"
    },
    { 
      id: 7, 
      cuvee: "Blanc de Blancs", 
      date: "20/04/2025", 
      nombreBouteilles: 750, 
      typeBouteille: "standard", 
      typeEtiquette: "reserve",
      lotNumber: "BB-2025-007",
      notes: "Cuvée spéciale export"
    },
    { 
      id: 8, 
      cuvee: "Cuvée Tradition", 
      date: "15/04/2025", 
      nombreBouteilles: 2000, 
      typeBouteille: "standard", 
      typeEtiquette: "standard",
      lotNumber: "CT-2025-008",
      notes: "Production standard"
    },
  ]);

  // Configuration des colonnes du tableau optimisée pour l'espace
  const columns = [
    { 
      key: "cuvee", 
      label: "Cuvée", 
      render: (item) => (
        <div>
          <div className="font-medium text-gray-900">{item.cuvee}</div>
          <div className="text-xs text-gray-500">Lot: {item.lotNumber}</div>
        </div>
      )
    },
    { 
      key: "date", 
      label: "Date", 
      render: (item) => (
        <div className="text-sm text-gray-600">{item.date}</div>
      )
    },
    { 
      key: "nombreBouteilles", 
      label: "Quantité", 
      render: (item) => (
        <div className="text-center">
          <div className="font-semibold text-lg text-blue-600">{item.nombreBouteilles.toLocaleString()}</div>
          <div className="text-xs text-gray-500">bouteilles</div>
        </div>
      )
    },
    { 
      key: "typeBouteille", 
      label: "Format", 
      render: (item) => {
        const formats = {
          'standard': { label: '75cl', color: 'bg-gray-100 text-gray-800' },
          'magnum': { label: '1.5L', color: 'bg-blue-100 text-blue-800' },
          'premium': { label: '75cl★', color: 'bg-purple-100 text-purple-800' },
          'jeroboam': { label: '3L', color: 'bg-green-100 text-green-800' }
        };
        const format = formats[item.typeBouteille] || formats.standard;
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${format.color}`}>
            <Package className="w-3 h-3 mr-1" />
            {format.label}
          </span>
        );
      }
    },
    { 
      key: "typeEtiquette", 
      label: "Étiquette", 
      render: (item) => {
        const etiquettes = {
          'standard': { label: 'Standard', color: 'bg-gray-100 text-gray-800' },
          'prestige': { label: 'Prestige', color: 'bg-yellow-100 text-yellow-800' },
          'reserve': { label: 'Réserve', color: 'bg-red-100 text-red-800' },
          'custom': { label: 'Custom', color: 'bg-indigo-100 text-indigo-800' }
        };
        const etiquette = etiquettes[item.typeEtiquette] || etiquettes.standard;
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${etiquette.color}`}>
            <Tag className="w-3 h-3 mr-1" />
            {etiquette.label}
          </span>
        );
      }
    },
    { 
      key: "notes", 
      label: "Notes", 
      render: (item) => (
        <div className="text-xs text-gray-600 max-w-xs truncate" title={item.notes}>
          {item.notes || "-"}
        </div>
      )
    },
    {
      key: "actions",
      label: "Actions",
      sortable: false,
      render: (item) => (
        <div className="flex gap-1">
          <button
            className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            onClick={() => handleEdit(item)}
            title="Modifier cette mise en bouteille"
          >
            Modifier
          </button>
          <button
            className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded hover:bg-red-100 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
            onClick={() => handleDelete(item)}
            title="Supprimer cette mise en bouteille"
          >
            Supprimer
          </button>
        </div>
      )
    }
  ];

  // Fonction pour sélectionner une cuvée
  const selectCuvee = (cuvee) => {
    setSelectedCuvee(cuvee);
    
    if (!editData) {
      // En mode création, générer un nouveau numéro de lot
      const prefix = cuvee.nom.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
      setBottlingData({
        ...bottlingData,
        lotNumber: `${prefix}-${new Date().getFullYear()}-${String(bottlingHistory.length + 1).padStart(3, '0')}`
      });
    }
  };

  // Mise à jour des données du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBottlingData({
      ...bottlingData,
      [name]: value
    });
  };

  // Gérer la modification d'un élément
  const handleEdit = (item) => {
    const cuveeItem = cuvees.find(c => c.nom === item.cuvee);
    setSelectedCuvee(cuveeItem || null);
    
    setBottlingData({
      dateMiseEnBouteille: item.date,
      nombreBouteilles: item.nombreBouteilles,
      typeBouteille: item.typeBouteille,
      typeEtiquette: item.typeEtiquette,
      lotNumber: item.lotNumber,
      notes: item.notes || ""
    });
    
    setEditData(item);
    setShowForm(true);
  };

  // Gérer la suppression d'un élément
  const handleDelete = (item) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer la mise en bouteille du lot ${item.lotNumber} ?`)) {
      setBottlingHistory(bottlingHistory.filter(bottling => bottling.id !== item.id));
    }
  };

  // Soumission du formulaire
  const handleSubmit = () => {
    if (!selectedCuvee || !bottlingData.dateMiseEnBouteille || !bottlingData.nombreBouteilles) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    if (editData) {
      // Mode modification
      const updatedHistory = bottlingHistory.map(item => {
        if (item.id === editData.id) {
          return {
            ...item,
            cuvee: selectedCuvee.nom,
            date: bottlingData.dateMiseEnBouteille,
            nombreBouteilles: parseInt(bottlingData.nombreBouteilles),
            typeBouteille: bottlingData.typeBouteille,
            typeEtiquette: bottlingData.typeEtiquette,
            lotNumber: bottlingData.lotNumber,
            notes: bottlingData.notes
          };
        }
        return item;
      });
      
      setBottlingHistory(updatedHistory);
      setEditData(null);
    } else {
      // Mode création
      const newBottling = {
        id: bottlingHistory.length > 0 ? Math.max(...bottlingHistory.map(item => item.id)) + 1 : 1,
        cuvee: selectedCuvee.nom,
        date: new Date().toLocaleDateString("fr-FR"),
        nombreBouteilles: parseInt(bottlingData.nombreBouteilles),
        typeBouteille: bottlingData.typeBouteille,
        typeEtiquette: bottlingData.typeEtiquette,
        lotNumber: bottlingData.lotNumber,
        notes: bottlingData.notes
      };
      
      setBottlingHistory([...bottlingHistory, newBottling]);
    }
    
    resetForm();
    setShowForm(false);
  };

  // Réinitialisation du formulaire
  const resetForm = () => {
    setBottlingData({
      dateMiseEnBouteille: new Date().toISOString().split('T')[0],
      nombreBouteilles: "",
      typeBouteille: "standard",
      typeEtiquette: "standard",
      lotNumber: "",
      notes: ""
    });
    
    setSelectedCuvee(null);
    setEditData(null);
  };

  // Calcul des statistiques
  const totalBottles = bottlingHistory.reduce((sum, item) => sum + item.nombreBouteilles, 0);
  const uniqueCuvees = [...new Set(bottlingHistory.map(item => item.cuvee))].length;
  const recentBottlings = bottlingHistory.filter(item => {
    const itemDate = new Date(item.date.split('/').reverse().join('-'));
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return itemDate >= thirtyDaysAgo;
  }).length;

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50">
      <div className="mx-auto max-w-full">
        {/* En-tête avec bouton d'ajout */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mise en Bouteille</h1>
            <p className="text-gray-600 mt-1">Gestion des mises en bouteille et historique</p>
          </div>
          <button
            onClick={() => {
              setShowForm(!showForm);
              if (showForm) {
                resetForm();
              }
            }}
            className="inline-flex items-center px-4 py-2 bg-red-800 text-white text-sm font-medium rounded-lg hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            {showForm ? 'Annuler' : 'Nouvelle mise en bouteille'}
          </button>
        </div>

        {/* Formulaire conditionnel */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {editData ? 'Modifier la mise en bouteille' : 'Nouvelle mise en bouteille'}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sélection de cuvée simplifiée */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Sélection de la cuvée *
                </label>
                <select
                  value={selectedCuvee?.id || ''}
                  onChange={(e) => {
                    const cuvee = cuvees.find(c => c.id === parseInt(e.target.value));
                    if (cuvee) selectCuvee(cuvee);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Choisir une cuvée...</option>
                  {cuvees.map(cuvee => (
                    <option key={cuvee.id} value={cuvee.id}>
                      {cuvee.nom} - {cuvee.qualite}
                    </option>
                  ))}
                </select>
                
                {selectedCuvee && (
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">
                      <strong>Qualité:</strong> {selectedCuvee.qualite}<br/>
                      <strong>Créée le:</strong> {selectedCuvee.dateCreation}
                    </p>
                  </div>
                )}
              </div>

              {/* Formulaire principal */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de mise en bouteille *
                    </label>
                    <input
                      type="date"
                      name="dateMiseEnBouteille"
                      value={bottlingData.dateMiseEnBouteille}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de bouteilles *
                    </label>
                    <input
                      type="number"
                      name="nombreBouteilles"
                      value={bottlingData.nombreBouteilles}
                      onChange={handleInputChange}
                      placeholder="Ex: 1000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type de bouteille
                    </label>
                    <select
                      name="typeBouteille"
                      value={bottlingData.typeBouteille}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="standard">Standard (75cl)</option>
                      <option value="magnum">Magnum (1.5L)</option>
                      <option value="premium">Premium (75cl)</option>
                      <option value="jeroboam">Jéroboam (3L)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type d'étiquette
                    </label>
                    <select
                      name="typeEtiquette"
                      value={bottlingData.typeEtiquette}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="standard">Standard</option>
                      <option value="prestige">Prestige</option>
                      <option value="reserve">Réserve</option>
                      <option value="custom">Personnalisée</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de lot
                  </label>
                  <input
                    type="text"
                    name="lotNumber"
                    value={bottlingData.lotNumber}
                    onChange={handleInputChange}
                    placeholder="Généré automatiquement"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={bottlingData.notes}
                    onChange={handleInputChange}
                    placeholder="Commentaires sur cette mise en bouteille..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedCuvee || !bottlingData.nombreBouteilles}
                    className="flex-1 px-4 py-2 bg-red-800 text-white text-sm font-medium rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {editData ? 'Mettre à jour' : 'Enregistrer la mise en bouteille'}
                  </button>
                  <button
                    onClick={() => {
                      resetForm();
                      setShowForm(false);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistiques compactes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total bouteilles</p>
                <p className="text-2xl font-bold text-red-600">{totalBottles.toLocaleString()}</p>
              </div>
              <Wine className="h-8 w-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Mises en bouteille</p>
                <p className="text-2xl font-bold text-blue-600">{bottlingHistory.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cuvées différentes</p>
                <p className="text-2xl font-bold text-green-600">{uniqueCuvees}</p>
              </div>
              <Tag className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ce mois-ci</p>
                <p className="text-2xl font-bold text-purple-600">{recentBottlings}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tableau principal - pleine largeur */}
        <div className="w-full">
          <DataTable 
            data={bottlingHistory} 
            columns={columns}
            title="Historique des mises en bouteille"
            subtitle={`${bottlingHistory.length} enregistrements | ${totalBottles.toLocaleString()} bouteilles au total`}
          />
        </div>
      </div>
    </div>
  );
}