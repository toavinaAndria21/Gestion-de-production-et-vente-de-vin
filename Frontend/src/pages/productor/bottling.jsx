import { useState, useEffect, useContext } from "react";
import { Plus, Calendar, Wine, Package, Tag } from "lucide-react";
import DataTable from "../../components/newDataTable";
import { fetchAll, create, update, remove } from '../../utils/api';
import { AuthContext } from '../../context/authContext';
import { useToast } from '../../context/toastContext';

export default function Bottling() {
  const { user } = useContext(AuthContext);
  const { showSucces, showError } = useToast();
  
  const [editData, setEditData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // États pour les données API - initialisation avec des tableaux vides
  const [vintages, setVintages] = useState([]);
  const [products, setProducts] = useState([]); // Produits créés (mises en bouteille)
  const [formats, setFormats] = useState([]); // Formats de bouteilles disponibles

  // Cuvée sélectionnée pour la mise en bouteille
  const [selectedVintage, setSelectedVintage] = useState(null);
  
  // Données du formulaire de mise en bouteille
  const [bottlingData, setBottlingData] = useState({
    label: "",
    price: "",
    type: "Rouge", // WineType enum: 'Blanc' | 'Rouge'
    stock: "",
    category: "Standard", // Collection enum: 'Prestige' | 'Standard' | 'Découverte'
    formatId: "", // Référence au format de bouteille
    image: "default.jpg" // Image par défaut
  });

  // Chargement des données au montage
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Charger toutes les données nécessaires
        const vintagesData = await fetchAll("vintage");
        const productsData = await fetchAll("vintage");
        const formatsData = await fetchAll("vintage");
        
        // Mapper les vintages - seules les cuvées terminées peuvent être mises en bouteille
        const availableVintages = (vintagesData || [])
          .filter(vintage => (vintage && vintage.isComplete && vintage.globalProgress === 100) || true)
          .map(vintage => ({
            ...vintage,
            displayName: `${vintage.label} - ${vintage.quality}`,
            dateCreation: new Date(vintage.createdAt).toLocaleDateString("fr-FR")
          }));
        
        setVintages(availableVintages);
        
        // Mapper les produits (mises en bouteille existantes)
        const mappedProducts = (productsData || []).map(product => ({
          id: product.productId,
          productId: product.productId,
          vintageId: product.vintageId,
          cuveeName: product.vintage?.label || "Cuvée inconnue",
          label: product.label,
          price: parseFloat(product.price || 0),
          type: product.type,
          stock: product.stock || 0,
          category: product.category,
          formatLabel: product.format?.label || "Format inconnu",
          formatQuantity: product.format?.quantity || 0,
          formatUnit: product.format?.unit || "cL",
          image: product.image,
          createdAt: new Date(product.createdAt).toLocaleDateString("fr-FR"),
          // Données calculées pour l'affichage
          nombreBouteilles: product.stock || 0,
          typeBouteille: product.format?.label || "standard",
          date: new Date(product.createdAt).toLocaleDateString("fr-FR")
        }));
        
        setProducts(mappedProducts);
        setFormats(formatsData || []);
        
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
        showError("Erreur lors du chargement des données");
        
        // Fallback - charger au moins les formats par défaut si possible
        try {
          const formatsData = await fetchAll("format");
          setFormats(formatsData);
        } catch (formatError) {
          console.error("Impossible de charger les formats :", formatError);
          // Formats par défaut si l'API échoue complètement
          setFormats([
            { formatId: 1, label: "Bouteille 75cL", quantity: 75, unit: "cL" },
            { formatId: 2, label: "Magnum 1.5L", quantity: 150, unit: "cL" },
            { formatId: 3, label: "Jéroboam 3L", quantity: 300, unit: "cL" }
          ]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Recharger les données après une modification
  const reloadData = async () => {
    try {
      const [vintagesData, productsData] = await Promise.all([
        fetchAll("vintage"),
        fetchAll("product")
      ]);
      
      const availableVintages = vintagesData
        .filter(vintage => vintage.isComplete && vintage.globalProgress === 100)
        .map(vintage => ({
          ...vintage,
          displayName: `${vintage.label} - ${vintage.quality}`,
          dateCreation: new Date(vintage.createdAt).toLocaleDateString("fr-FR")
        }));
      
      setVintages(availableVintages);
      
      const mappedProducts = productsData.map(product => ({
        id: product.productId,
        productId: product.productId,
        vintageId: product.vintageId,
        cuveeName: product.vintage?.label || "Cuvée inconnue",
        label: product.label,
        price: parseFloat(product.price),
        type: product.type,
        stock: product.stock,
        category: product.category,
        formatLabel: product.format?.label || "Format inconnu",
        formatQuantity: product.format?.quantity || 0,
        formatUnit: product.format?.unit || "cL",
        image: product.image,
        createdAt: new Date(product.createdAt).toLocaleDateString("fr-FR"),
        nombreBouteilles: product.stock,
        typeBouteille: product.format?.label || "standard",
        date: new Date(product.createdAt).toLocaleDateString("fr-FR")
      }));
      
      setProducts(mappedProducts);
    } catch (error) {
      console.error("Erreur lors du rechargement :", error);
    }
  };

  // Configuration des colonnes du tableau
  const columns = [
    { 
      key: "cuveeName", 
      label: "Cuvée", 
      render: (item) => (
        <div>
          <div className="font-medium text-gray-900">{item.cuveeName}</div>
          <div className="text-xs text-gray-500">{item.label}</div>
        </div>
      )
    },
    { 
      key: "date", 
      label: "Date de création", 
      render: (item) => (
        <div className="text-sm text-gray-600">{item.date}</div>
      )
    },
    { 
      key: "stock", 
      label: "Stock", 
      render: (item) => (
        <div className="text-center">
          <div className="font-semibold text-lg text-blue-600">{item.stock.toLocaleString()}</div>
          <div className="text-xs text-gray-500">bouteilles</div>
        </div>
      )
    },
    { 
      key: "formatLabel", 
      label: "Format", 
      render: (item) => {
        const getFormatColor = (format) => {
          if (format.includes("Magnum")) return 'bg-blue-100 text-blue-800';
          if (format.includes("Jéroboam")) return 'bg-green-100 text-green-800';
          if (format.includes("Premium")) return 'bg-purple-100 text-purple-800';
          return 'bg-gray-100 text-gray-800';
        };
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getFormatColor(item.formatLabel)}`}>
            <Package className="w-3 h-3 mr-1" />
            {item.formatLabel}
          </span>
        );
      }
    },
    { 
      key: "category", 
      label: "Catégorie", 
      render: (item) => {
        const categories = {
          'Prestige': { label: 'Prestige', color: 'bg-yellow-100 text-yellow-800' },
          'Standard': { label: 'Standard', color: 'bg-gray-100 text-gray-800' },
          'Découverte': { label: 'Découverte', color: 'bg-green-100 text-green-800' }
        };
        const category = categories[item.category] || categories.Standard;
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${category.color}`}>
            <Tag className="w-3 h-3 mr-1" />
            {category.label}
          </span>
        );
      }
    },
    { 
      key: "price", 
      label: "Prix", 
      render: (item) => (
        <div className="text-right">
          <div className="font-semibold text-green-600">{item.price.toFixed(2)} €</div>
          <div className="text-xs text-gray-500">{item.type}</div>
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
            title="Modifier ce produit"
          >
            Modifier
          </button>
          <button
            className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded hover:bg-red-100 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
            onClick={() => handleDelete(item)}
            title="Supprimer ce produit"
          >
            Supprimer
          </button>
        </div>
      )
    }
  ];

  // Fonction pour sélectionner une cuvée
  const selectVintage = (vintage) => {
    setSelectedVintage(vintage);
    
    if (!editData) {
      // En mode création, pré-remplir certains champs
      setBottlingData({
        ...bottlingData,
        label: `${vintage.label} - ${vintage.quality}`,
        type: vintage.quality?.toLowerCase().includes('blanc') ? 'Blanc' : 'Rouge'
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
    const vintage = vintages.find(v => v.vintageId === item.vintageId);
    setSelectedVintage(vintage || null);
    
    setBottlingData({
      label: item.label,
      price: item.price.toString(),
      type: item.type,
      stock: item.stock.toString(),
      category: item.category,
      formatId: item.formatId || "",
      image: item.image
    });
    
    setEditData(item);
    setShowForm(true);
  };

  // Gérer la suppression d'un élément
  const handleDelete = async (item) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer le produit "${item.label}" ?`)) {
      try {
        setLoading(true);
        
        await remove("product", item.productId);
        showSucces("Produit supprimé avec succès !");
        
        await reloadData();
        
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        showError(`Erreur lors de la suppression : ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    if (!selectedVintage) {
      showError("Veuillez sélectionner une cuvée");
      return false;
    }
    
    if (!bottlingData.label.trim()) {
      showError("Le nom du produit est obligatoire");
      return false;
    }
    
    if (!bottlingData.price || parseFloat(bottlingData.price) <= 0) {
      showError("Le prix doit être un nombre positif");
      return false;
    }
    
    if (!bottlingData.stock || parseInt(bottlingData.stock) <= 0) {
      showError("Le stock doit être un nombre positif");
      return false;
    }
    
    if (!bottlingData.formatId) {
      showError("Veuillez sélectionner un format de bouteille");
      return false;
    }
    
    return true;
  };

  // Soumission du formulaire
  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    try {
      setLoading(true);
      
      const productPayload = {
        vintageId: selectedVintage.vintageId,
        formatId: parseInt(bottlingData.formatId),
        label: bottlingData.label.trim(),
        price: parseFloat(bottlingData.price),
        type: bottlingData.type,
        stock: parseInt(bottlingData.stock),
        category: bottlingData.category,
        image: bottlingData.image || "default.jpg"
      };
      
      if (editData) {
        // Mode modification
        await update("product", editData.productId, productPayload);
        showSucces("Produit modifié avec succès !");
        setEditData(null);
      } else {
        // Mode création
        await create("product", productPayload);
        showSucces("Produit créé avec succès !");
      }
      
      await reloadData();
      resetForm();
      setShowForm(false);
      
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      
      let errorMessage = "Erreur lors de l'enregistrement du produit";
      if (error.message) {
        if (error.message.includes("formatId")) {
          errorMessage = "Format de bouteille invalide";
        } else if (error.message.includes("vintageId")) {
          errorMessage = "Cuvée invalide ou introuvable";
        } else {
          errorMessage = `Erreur: ${error.message}`;
        }
      }
      
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Réinitialisation du formulaire
  const resetForm = () => {
    setBottlingData({
      label: "",
      price: "",
      type: "Rouge",
      stock: "",
      category: "Standard",
      formatId: "",
      image: "default.jpg"
    });
    
    setSelectedVintage(null);
    setEditData(null);
  };

  // Calcul des statistiques avec vérifications de sécurité
  const totalBottles = (products || []).reduce((sum, item) => sum + (item.stock || 0), 0);
  const totalValue = (products || []).reduce((sum, item) => sum + ((item.stock || 0) * (item.price || 0)), 0);
  const uniqueVintages = [...new Set((products || []).map(item => item.vintageId))].length;
  const recentProducts = (products || []).filter(item => {
    if (!item.date) return false;
    const itemDate = new Date(item.date.split('/').reverse().join('-'));
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return itemDate >= thirtyDaysAgo;
  }).length;

  if (loading && vintages.length === 0 && products.length === 0) {
    return (
      <div className="w-full min-h-screen p-6 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50">
      <div className="mx-auto max-w-full">
        {/* En-tête avec bouton d'ajout */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mise en Bouteille</h1>
            <p className="text-gray-600 mt-1">Création de produits finis à partir des cuvées terminées</p>
          </div>
          <button
            onClick={() => {
              setShowForm(!showForm);
              if (showForm) {
                resetForm();
              }
            }}
            disabled={loading}
            className="inline-flex items-center px-4 py-2 bg-red-800 text-white text-sm font-medium rounded-lg hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            {showForm ? 'Annuler' : 'Nouveau produit'}
          </button>
        </div>

        {/* Formulaire conditionnel */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {editData ? 'Modifier le produit' : 'Nouveau produit'}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sélection de cuvée */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Cuvée terminée * {vintages.length === 0 && "(Aucune cuvée terminée disponible)"}
                </label>
                {vintages.length > 0 ? (
                  <>
                    <select
                      value={selectedVintage?.vintageId || ''}
                      onChange={(e) => {
                        const vintage = vintages.find(v => v.vintageId === parseInt(e.target.value));
                        if (vintage) selectVintage(vintage);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Choisir une cuvée...</option>
                      {(vintages || []).map(vintage => (
                        <option key={vintage.vintageId} value={vintage.vintageId}>
                          {vintage.displayName}
                        </option>
                      ))}
                    </select>
                    
                    {selectedVintage && (
                      <div className="p-3 bg-gray-50 rounded-md">
                        <p className="text-sm text-gray-600">
                          <strong>Qualité:</strong> {selectedVintage.quality}<br/>
                          <strong>Créée le:</strong> {selectedVintage.dateCreation}<br/>
                          <strong>Progression:</strong> {selectedVintage.globalProgress}% (Terminée)
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-800">
                      Aucune cuvée terminée n'est disponible pour la mise en bouteille. 
                      Veuillez d'abord terminer une cuvée dans le module de production.
                    </p>
                  </div>
                )}
              </div>

              {/* Formulaire principal */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom du produit *
                    </label>
                    <input
                      type="text"
                      name="label"
                      value={bottlingData.label}
                      onChange={handleInputChange}
                      placeholder="Ex: Château Rouge Premium"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix unitaire (Ar) *
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={bottlingData.price}
                      onChange={handleInputChange}
                      placeholder="Ex: 25.50"
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type de vin
                    </label>
                    <select
                      name="type"
                      value={bottlingData.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="Rouge">Rouge</option>
                      <option value="Blanc">Blanc</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stock initial *
                    </label>
                    <input
                      type="number"
                      name="stock"
                      value={bottlingData.stock}
                      onChange={handleInputChange}
                      placeholder="Ex: 1000"
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Format de bouteille *
                    </label>
                    <select
                      name="formatId"
                      value={bottlingData.formatId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Choisir un format...</option>
                      {(formats || []).map(format => (
                        <option key={format.formatId} value={format.formatId}>
                          {format.label} ({format.quantity}{format.unit})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Catégorie
                    </label>
                    <select
                      name="category"
                      value={bottlingData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="Standard">Standard</option>
                      <option value="Prestige">Prestige</option>
                      <option value="Découverte">Découverte</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedVintage || !bottlingData.label || !bottlingData.price || !bottlingData.stock || !bottlingData.formatId || loading}
                    className="flex-1 px-4 py-2 bg-red-800 text-white text-sm font-medium rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? 'Enregistrement...' : (editData ? 'Mettre à jour' : 'Créer le produit')}
                  </button>
                  <button
                    onClick={() => {
                      resetForm();
                      setShowForm(false);
                    }}
                    disabled={loading}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
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
                <p className="text-sm font-medium text-gray-600">Stock total</p>
                <p className="text-2xl font-bold text-red-600">{totalBottles.toLocaleString()}</p>
              </div>
              <Wine className="h-8 w-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Valeur stock</p>
                <p className="text-2xl font-bold text-green-600">{totalValue.toFixed(0)}€</p>
              </div>
              <Package className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cuvées mises en bouteille</p>
                <p className="text-2xl font-bold text-blue-600">{uniqueVintages}</p>
              </div>
              <Tag className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ce mois-ci</p>
                <p className="text-2xl font-bold text-purple-600">{recentProducts}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tableau principal */}
        <div className="w-full">
          <DataTable 
            data={products} 
            columns={columns}
            title="Produits en stock"
            subtitle={`${products.length} produits | ${totalBottles.toLocaleString()} bouteilles | ${totalValue.toFixed(2)}Ar de valeur`}
          />
        </div>
      </div>
    </div>
  );
}