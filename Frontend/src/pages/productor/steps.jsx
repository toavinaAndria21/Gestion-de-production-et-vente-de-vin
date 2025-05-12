import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import SearchInput from "../../components/searchInput";


const durationUnits = ["JOUR", "HEURE"];

export default function Steps() {
  const [steps, setSteps] = useState([
    {
      stepId: 1,
      label: "Égrappage",
      duration: 1,
      unit: "JOUR",
      temperature: 20,
      description: "Séparation des grappes",
      productorId: "P001",
      createdAt: new Date(),
    },
    {
      stepId: 2,
      label: "Fermentation",
      duration: 7,
      unit: "JOUR",
      temperature: 25,
      description: "Transformation des sucres en alcool",
      productorId: "P001",
      createdAt: new Date(),
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [newStep, setNewStep] = useState({
    label: "",
    duration: "",
    unit: "JOUR",
    description: "",
    productorId: "P001",
  });

  const ajouterOuModifierStep = () => {
    const { label, duration, unit } = newStep;
    if (!label || !duration || !unit) {
      alert("Les champs obligatoires sont manquants.");
      return;
    }

    if (editingId !== null) {
      setSteps((prev) =>
        prev.map((s) =>
          s.stepId === editingId
            ? { ...s, ...newStep, duration: parseInt(duration) }
            : s
        )
      );
      setEditingId(null);
    } else {
      const stepId = steps.length ? steps[steps.length - 1].stepId + 1 : 1;
      setSteps([
        ...steps,
        {
          ...newStep,
          stepId,
          duration: parseInt(duration),
          createdAt: new Date(),
        },
      ]);
    }

    setNewStep({
      label: "",
      duration: "",
      unit: "JOUR",
      description: "",
      productorId: "P001",
    });
  };

  const modifierStep = (step) => {
    setEditingId(step.stepId);
    setNewStep({
      label: step.label,
      duration: step.duration,
      unit: step.unit,
      description: step.description,
      productorId: step.productorId,
    });
  };

  const supprimerStep = (id) => {
    setSteps(steps.filter((s) => s.stepId !== id));
    if (editingId === id) {
      setEditingId(null);
      setNewStep({
        label: "",
        duration: "",
        unit: "JOUR",
        description: "",
        productorId: "P001",
      });
    }
  };

  const filteredSteps = steps.filter((step) =>
    step.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full px-6 py-4 bg-gray-50 max-w-none">
      <h1 className="text-2xl font-extrabold text-red-900 mb-6">Étapes de Vinification</h1>

    {/* Barre de recherche */}
    <SearchInput onChange={setSearchTerm}/>

      {/* Formulaire d'ajout/modification */}
      <div className="bg-white shadow-lg p-6 rounded-xl mb-6 border border-red-100">
        <h2 className="font-semibold text-gray-700 mb-4 text-lg">
          {editingId ? "Modifier l'étape" : "Ajouter une étape"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Nom de l'étape"
            value={newStep.label}
            onChange={(e) => setNewStep({ ...newStep, label: e.target.value })}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <input
            type="number"
            placeholder="Durée"
            value={newStep.duration}
            onChange={(e) => setNewStep({ ...newStep, duration: e.target.value })}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <select
            value={newStep.unit}
            onChange={(e) => setNewStep({ ...newStep, unit: e.target.value })}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          >
            {durationUnits.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Description"
            value={newStep.description}
            onChange={(e) => setNewStep({ ...newStep, description: e.target.value })}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <button
            onClick={ajouterOuModifierStep}
            className="bg-red-900 hover:bg-red-800 text-white px-4 py-3 rounded flex items-center justify-center w-full"
          >
            <Plus size={18} className="mr-1" />
            {editingId ? "Modifier" : "Ajouter"}
          </button>
        </div>
      </div>

      {/* Tableau des étapes */}
      <div className="bg-white shadow-lg rounded-xl overflow-auto border border-red-100">
        <table className="w-full table-auto text-sm">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Nom</th>
              <th className="px-4 py-3 text-left">Durée</th>
              <th className="px-4 py-3 text-left">Unité</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Créée le</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSteps.map((step) => (
              <tr key={step.stepId} className="border-b hover:bg-red-50">
                <td className="px-4 py-3">{step.label}</td>
                <td className="px-4 py-3">{step.duration}</td>
                <td className="px-4 py-3">{step.unit}</td>
                <td className="px-4 py-3">{step.description || "-"}</td>
                <td className="px-4 py-3">
                  {new Date(step.createdAt).toLocaleDateString("fr-FR")}
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <button
                    onClick={() => modifierStep(step)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Modifier"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => supprimerStep(step.stepId)}
                    className="text-red-600 hover:text-red-800"
                    title="Supprimer"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredSteps.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  Aucune étape trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
