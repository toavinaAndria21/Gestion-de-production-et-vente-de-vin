import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { toast, Toaster } from "sonner";
import DataTable from "../../components/newDataTable";
import GenericForm from "../../components/genericForm";
import { fetchAll, create, update, remove } from "../../utils/api";

export default function Steps() {
  const [steps, setSteps] = useState([]);
  const [editingStep, setEditingStep] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataTableLoading, setDataTableLoading] = useState(true);
  const [dataTableError, setDataTableError] = useState(null);

  useEffect(() => {
    async function loadSteps() {
      setDataTableLoading(true);
      setDataTableError(null);
      try {
        const data = await fetchAll("step");
        setSteps(data);
      } catch (error) {
        setDataTableError("Erreur de chargement des étapes.");
        console.error("Erreur de chargement des étapes :", error);
        toast.error("Erreur de chargement des étapes.");
      } finally {
        setDataTableLoading(false);
      }
    }
    loadSteps();
  }, []);

  const handleAdd = () => {
    setEditingStep(null);
    setShowForm(true);
  };

  const openEditModal = (step) => {
    setEditingStep(step);
    setShowForm(true);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingStep(null);
  };

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const stepData = {
        ...formData,
        duration: parseInt(formData.duration, 10),
        productorId: "123123123123",
      };

      if (editingStep) {
        const updatedStep = await update("step", editingStep.stepId, stepData);
        setSteps((prev) =>
          prev.map((item) => (item.stepId === editingStep.stepId ? updatedStep : item))
        );
        toast.success("Étape modifiée avec succès.");
      } else {
        const newStepFromApi = await create("step", stepData);
        setSteps((prev) => [...prev, newStepFromApi]);
        toast.success("Étape ajoutée avec succès.");
      }

      setShowForm(false);
      setEditingStep(null);
    } catch (error) {
      console.error("Erreur lors de l'ajout ou modification d'une étape :", error);
      toast.error("Une erreur est survenue.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (item) => {
    toast(
      `Voulez-vous supprimer "${item.label}" ?`,
      {
        action: {
          label: "Supprimer",
          onClick: () => confirmDelete(item),
        },
        cancel: {
          label: "Annuler",
        },
      }
    );
  };

  const confirmDelete = async (item) => {
    setIsLoading(true);
    try {
      await remove("step", item.stepId);
    
      setSteps((prev) => prev.filter((i) => i.stepId !== item.stepId));
      toast.success(`Étape "${item.label}" supprimée.`);
      
      if (editingStep && editingStep.stepId === item.stepId) {
        setEditingStep(null);
        setShowForm(false);
      }
    } catch (error) {
      console.error("Erreur de suppression :", error);
      toast.error("Échec de la suppression.");
    } finally {
      setIsLoading(false);
    }
  };

  // Configuration des colonnes pour le nouveau DataTable
  const columns = [
    { 
      key: "label", 
      label: "Nom",
      width: "w-1/5" 
    },
    { 
      key: "duration", 
      label: "Durée",
      width: "w-1/6"
    },
    { 
      key: "unit", 
      label: "Unité",
      width: "w-1/6"
    },
    { 
      key: "description", 
      label: "Description",
      width: "w-1/3"
    },
    {
      key: "createdAt",
      label: "Date de création",
      width: "w-1/6",
      render: (item) =>
        item.createdAt
          ? new Date(item.createdAt).toLocaleDateString("fr-FR")
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
            onClick={() => openEditModal(item)}
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

  return (
    <div className="w-full h-full px-6 py-4 bg-gray-50 flex flex-col space-y-6 overflow-hidden">
      <Toaster richColors position="top-right" />
      
      {/* En-tête de la page */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-red-900">Gestion des Étapes</h1>
        
        {/* Bouton d'ajout - affiché seulement si le formulaire n'est pas visible */}
        {!showForm && (
          <button
            onClick={handleAdd}
            className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <Plus className="w-5 h-5 mr-2" />
            Ajouter une étape
          </button>
        )}
      </div>

      {/* Formulaire d'ajout/édition */}
      {showForm && (
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingStep ? "Modifier l'étape" : "Ajouter une nouvelle étape"}
            </h3>
            <GenericForm
              modelType="step"
              initialData={editingStep || {}}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
              isEditing={!!editingStep}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}

      {/* Tableau avec le nouveau composant DataTable */}
      <div className="flex-1 overflow-hidden">
        <DataTable
          data={steps}
          columns={columns}
          title="Liste des étapes de vinification"
          subtitle={`${steps.length} étape${steps.length > 1 ? 's' : ''} enregistrée${steps.length > 1 ? 's' : ''}`}
          loading={dataTableLoading}
          error={dataTableError}
        />
      </div>
    </div>
  );
}