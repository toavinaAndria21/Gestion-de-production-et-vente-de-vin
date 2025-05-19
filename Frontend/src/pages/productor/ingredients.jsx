import { useState, useEffect } from "react";
import DataTable from "../../components/newDataTable";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import GenericForm from "../../components/genericForm";
import { fetchAll, create, update, remove } from "../../utils/api";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingredientToDelete, setIngredientToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState(null);

  // Chargement initial des données
  useEffect(() => {
    loadIngredients();
  }, []);

  const loadIngredients = async () => {
    try {
      setIsLoadingData(true);
      setError(null);
      console.log("Début du chargement des ingrédients");
      const data = await fetchAll("ingredient");
      setIngredients(data);
    } catch (error) {
      console.error("Erreur lors du chargement des ingrédients :", error);
      setError("Impossible de charger les ingrédients. Veuillez réessayer.");
    } finally {
      setIsLoadingData(false);
    }
  };

  // Gestion de la soumission du formulaire
  const handleFormSubmit = async (formData) => {
    setIsLoading(true);

    try {
      if (editingItem) {
        // Mise à jour
        const updatedIngredient = await update("ingredient", editingItem.ingredientId, {
          ...formData,
          productorId: "123123123123" // ID du producteur (à adapter selon votre logique)
        });
        
        setIngredients(prev =>
          prev.map(item =>
            item.ingredientId === editingItem.ingredientId ? updatedIngredient : item
          )
        );
      } else {
        // Création
        const newIngredient = await create("ingredient", {
          ...formData,
          productorId: "123123123123" // ID du producteur (à adapter selon votre logique)
        });
        
        setIngredients(prev => [...prev, newIngredient]);
      }

      // Réinitialisation du formulaire
      setEditingItem(null);
      setShowForm(false);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      setError("Une erreur est survenue lors de la sauvegarde.");
    } finally {
      setIsLoading(false);
    }
  };

  // Annulation du formulaire
  const handleFormCancel = () => {
    setEditingItem(null);
    setShowForm(false);
  };

  // Ouverture du formulaire pour édition
  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  // Ouverture du formulaire pour création
  const handleAdd = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  // Préparation de la suppression
  const handleDelete = (item) => {
    setIngredientToDelete(item);
    setIsModalOpen(true);
  };

  // Confirmation de la suppression
  const confirmDelete = async () => {
    try {
      await remove("ingredient", ingredientToDelete.ingredientId);

      setIngredients(prev =>
        prev.filter(i => i.ingredientId !== ingredientToDelete.ingredientId)
      );

      // Si on était en train d'éditer cet élément, on ferme le formulaire
      if (editingItem && editingItem.ingredientId === ingredientToDelete.ingredientId) {
        setEditingItem(null);
        setShowForm(false);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      setError("Une erreur est survenue lors de la suppression.");
    } finally {
      setIsModalOpen(false);
      setIngredientToDelete(null);
    }
  };

  // Configuration des colonnes du tableau avec styles améliorés
  const columns = [
    { 
      key: "label", 
      label: "Nom de l'ingrédient",
      width: "w-1/4"
    },
    { 
      key: "quantity", 
      label: "Quantité disponible",
      width: "w-1/6",
      render: (item) => (
        <div className="flex items-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            Number(item.quantity) <= Number(item.threshold)
              ? 'bg-red-100 text-red-800' 
              : Number(item.quantity) <= Number(item.threshold) * 1.5
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {Number(item.quantity) || 0} {item.unit || 'unités'}
          </span>
        </div>
      )
    },
    { 
      key: "threshold", 
      label: "Seuil d'alerte",
      width: "w-1/6",
      render: (item) => `${Number(item.threshold) || 0} ${item.unit || 'unités'}`
    },
    { 
      key: "provider", 
      label: "Fournisseur",
      width: "w-1/5"
    },
    {
      key: "createdAt",
      label: "Date de création",
      width: "w-1/6",
      render: (item) =>
        item.createdAt 
          ? new Date(item.createdAt).toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "N/A",
    },
    {
      key: "actions",
      label: "Actions",
      width: "w-1/6",
      sortable: false,
      render: (item) => (
        <div className="flex justify-center gap-2">
          <button
            className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200"
            onClick={() => handleEdit(item)}
            title="Modifier cet ingrédient"
          >
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Modifier
          </button>
          <button
            className="inline-flex items-center px-3 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-200"
            onClick={() => handleDelete(item)}
            title="Supprimer cet ingrédient"
          >
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Supprimer
          </button>
        </div>
      ),
    },
  ];

  // Filtrage des ingrédients selon le terme de recherche
  const filteredIngredients = ingredients.filter(ingredient => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      ingredient.label?.toLowerCase().includes(searchLower) ||
      ingredient.provider?.toLowerCase().includes(searchLower) ||
      ingredient.unit?.toLowerCase().includes(searchLower)
    );
  });

  // Calcul des statistiques
  const totalIngredients = ingredients.length;
  const lowStockIngredients = ingredients.filter(ing => 
    ing.quantity && ing.threshold && Number(ing.quantity) <= Number(ing.threshold)
  ).length;
  
  // Calcul des fournisseurs uniques (information capitale pour la traçabilité vinicole)
  const uniqueProviders = [...new Set(ingredients.filter(ing => ing.provider).map(ing => ing.provider))].length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* En-tête avec titre et statistiques */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Gestion des Ingrédients
              </h1>
              <p className="text-gray-600 mt-1">
                Gérez votre stock d'ingrédients et surveillez les niveaux d'alerte
              </p>
            </div>
            
            {!showForm && (
              <button
                onClick={handleAdd}
                className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Ajouter un ingrédient
              </button>
            )}
          </div>

          {/* Cartes de statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total ingrédients</p>
                  <p className="text-2xl font-bold text-gray-900">{totalIngredients}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Stock critique</p>
                  <p className="text-2xl font-bold text-red-600">{lowStockIngredients}</p>
                </div>
                <div className="p-3 bg-red-100 rounded-lg">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Fournisseurs actifs</p>
                  <p className="text-2xl font-bold text-gray-900">{uniqueProviders}</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message d'erreur global */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-red-800 font-medium">{error}</p>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-red-600 hover:text-red-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Formulaire d'ajout/édition */}
        {showForm && (
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {editingItem ? "Modifier l'ingrédient" : "Ajouter un nouvel ingrédient"}
              </h3>
              <GenericForm
                modelType="ingredient"
                initialData={editingItem || {}}
                onSubmit={handleFormSubmit}
                onCancel={handleFormCancel}
                isEditing={!!editingItem}
                isLoading={isLoading}
              />
            </div>
          </div>
        )}

        {/* Tableau des ingrédients avec le nouveau composant DataTable */}
        <div className="w-full">
          <DataTable
            data={filteredIngredients}
            columns={columns}
            title="Liste des ingrédients"
            subtitle={`${filteredIngredients.length} ingrédient${filteredIngredients.length > 1 ? 's' : ''} affiché${filteredIngredients.length > 1 ? 's' : ''} sur ${totalIngredients}${lowStockIngredients > 0 ? ` • ${lowStockIngredients} en stock critique` : ''}`}
            loading={isLoadingData}
            error={error}
          />
        </div>

        {/* Alerte pour stock critique */}
        {lowStockIngredients > 0 && !isLoadingData && (
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <p className="text-amber-800 font-medium">
                  Attention : {lowStockIngredients} ingrédient{lowStockIngredients > 1 ? 's sont' : ' est'} en stock critique
                </p>
                <p className="text-amber-700 text-sm mt-1">
                  Vérifiez les quantités et passez commande si nécessaire.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal de confirmation de suppression */}
        <ConfirmDeleteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={confirmDelete}
          message={`Voulez-vous vraiment supprimer l'ingrédient "${ingredientToDelete?.label}" ?`}
        />
      </div>
    </div>
  );
}