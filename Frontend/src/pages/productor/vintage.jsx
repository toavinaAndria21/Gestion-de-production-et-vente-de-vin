import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";

export default function Vintage() {
  const [vintages, setVintages] = useState([
    {
      vintageId: 1,
      label: "Cuvée 2023",
      quality: "Excellente",
      createdAt: new Date(),
    },
    {
      vintageId: 2,
      label: "Cuvée 2022",
      quality: "Bonne",
      createdAt: new Date(),
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newVintage, setNewVintage] = useState({ label: "", quality: "" });
  const [editingId, setEditingId] = useState(null);

  const ajouterOuModifierVintage = () => {
    const { label, quality } = newVintage;
    if (!label || !quality) {
      alert("Tous les champs sont requis.");
      return;
    }

    if (editingId !== null) {
      setVintages((prev) =>
        prev.map((v) =>
          v.vintageId === editingId ? { ...v, label, quality } : v
        )
      );
      setEditingId(null);
    } else {
      const newId = vintages.length
        ? vintages[vintages.length - 1].vintageId + 1
        : 1;
      setVintages([
        ...vintages,
        {
          vintageId: newId,
          label,
          quality,
          createdAt: new Date(),
        },
      ]);
    }

    setNewVintage({ label: "", quality: "" });
  };

  const supprimerVintage = (id) => {
    setVintages(vintages.filter((v) => v.vintageId !== id));
    if (editingId === id) {
      setEditingId(null);
      setNewVintage({ label: "", quality: "" });
    }
  };

  const modifierVintage = (vintage) => {
    setNewVintage({ label: vintage.label, quality: vintage.quality });
    setEditingId(vintage.vintageId);
  };

  const filteredVintages = vintages.filter((v) =>
    v.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full px-6 py-4 bg-gray-50 max-w-none">
      <h1 className="text-2xl font-extrabold text-red-900 mb-6">
        Gestion des Cuvées de Vin
      </h1>

      {/* Barre de recherche */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un ingrédient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-red-200 rounded focus:outline-none focus:ring focus:ring-red-200"
        />
      </div>

      {/* Formulaire d'ajout/modification */}
      <div className="bg-white shadow-lg p-6 rounded-xl mb-6 border border-red-100">
        <h2 className="font-semibold text-gray-700 mb-4 text-lg">
          {editingId ? "Modifier la cuvée" : "Ajouter une cuvée"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Nom de la cuvée"
            value={newVintage.label}
            onChange={(e) =>
              setNewVintage({ ...newVintage, label: e.target.value })
            }
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <input
            type="text"
            placeholder="Qualité"
            value={newVintage.quality}
            onChange={(e) =>
              setNewVintage({ ...newVintage, quality: e.target.value })
            }
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <button
            onClick={ajouterOuModifierVintage}
            className="bg-red-900 hover:bg-red-800 text-white px-4 py-3 rounded flex items-center justify-center w-full"
          >
            <Plus size={18} className="mr-1" />
            {editingId ? "Modifier" : "Ajouter"}
          </button>
        </div>
      </div>

      {/* Tableau des cuvées */}
      <div className="bg-white shadow-lg rounded-xl overflow-auto border border-red-100">
        <table className="w-full table-auto text-sm">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Nom</th>
              <th className="px-4 py-3 text-left">Qualité</th>
              <th className="px-4 py-3 text-left">Créée le</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVintages.map((vintage) => (
              <tr key={vintage.vintageId} className="border-b hover:bg-red-50">
                <td className="px-4 py-3">{vintage.label}</td>
                <td className="px-4 py-3">{vintage.quality}</td>
                <td className="px-4 py-3">
                  {new Date(vintage.createdAt).toLocaleDateString("fr-FR")}
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <button
                    onClick={() => modifierVintage(vintage)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Modifier"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => supprimerVintage(vintage.vintageId)}
                    className="text-red-600 hover:text-red-800"
                    title="Supprimer"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredVintages.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-400">
                  Aucune cuvée trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
