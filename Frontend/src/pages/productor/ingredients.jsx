import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([
    {
      ingredientId: 1,
      label: "Raisin rouge",
      quantity: 100.5,
      threshold: 20,
      provider: "Fournisseur A",
      productorId: "P001",
      createdAt: new Date(),
    },
    {
      ingredientId: 2,
      label: "Sucre",
      quantity: 25,
      threshold: 5,
      provider: "Fournisseur B",
      productorId: "P001",
      createdAt: new Date(),
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const [newIngredient, setNewIngredient] = useState({
    label: "",
    quantity: "",
    threshold: "",
    provider: "",
    productorId: "P001",
  });

  const handleChange = (field, value) => {
    setNewIngredient((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const ajouterIngredient = () => {
    const { label, quantity, threshold, provider } = newIngredient;

    if (!label || !quantity || !threshold || !provider) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    const ingredientId = ingredients.length
      ? ingredients[ingredients.length - 1].ingredientId + 1
      : 1;

    const nouvelIngredient = {
      ...newIngredient,
      ingredientId,
      quantity: parseFloat(quantity),
      threshold: parseFloat(threshold),
      createdAt: new Date(),
    };

    setIngredients([...ingredients, nouvelIngredient]);

    setNewIngredient({
      label: "",
      quantity: "",
      threshold: "",
      provider: "",
      productorId: "P001",
    });
  };

  const supprimerIngredient = (id) => {
    setIngredients(ingredients.filter((i) => i.ingredientId !== id));
  };

  const ingredientsFiltres = ingredients.filter((ing) =>
    ing.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full px-6 py-4 bg-gray-50">
      <h1 className="text-2xl font-extrabold text-red-900 mb-6">
        Gestion des Ingrédients
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

      {/* Formulaire */}
      <div className="bg-white shadow-lg p-6 rounded-xl mb-8 border border-red-100">
        <h2 className="font-semibold text-gray-700 mb-4 text-lg">Ajouter un ingrédient</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Nom de l'ingrédient"
            value={newIngredient.label}
            onChange={(e) => handleChange("label", e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <input
            type="number"
            placeholder="Quantité"
            value={newIngredient.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <input
            type="number"
            placeholder="Seuil d'alerte"
            value={newIngredient.threshold}
            onChange={(e) => handleChange("threshold", e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <input
            type="text"
            placeholder="Fournisseur"
            value={newIngredient.provider}
            onChange={(e) => handleChange("provider", e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring focus:ring-red-200"
          />
          <button
            onClick={ajouterIngredient}
            className="bg-red-900 hover:bg-red-800 text-white px-4 py-3 rounded flex items-center justify-center w-full"
          >
            <Plus size={18} className="mr-1" /> Ajouter
          </button>
        </div>
      </div>

      {/* Tableau des ingrédients */}
      <div className="bg-white shadow-lg rounded-xl overflow-auto border border-red-100">
        <table className="w-full table-auto text-sm">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Nom</th>
              <th className="px-4 py-3 text-left">Quantité</th>
              <th className="px-4 py-3 text-left">Seuil</th>
              <th className="px-4 py-3 text-left">Fournisseur</th>
              <th className="px-4 py-3 text-left">Créé le</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ingredientsFiltres.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  Aucun ingrédient correspondant.
                </td>
              </tr>
            ) : (
              ingredientsFiltres.map((ing) => (
                <tr key={ing.ingredientId} className="border-b hover:bg-red-50">
                  <td className="px-4 py-3">{ing.label}</td>
                  <td className="px-4 py-3">{ing.quantity}</td>
                  <td className="px-4 py-3">{ing.threshold}</td>
                  <td className="px-4 py-3">{ing.provider}</td>
                  <td className="px-4 py-3">
                    {new Date(ing.createdAt).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button
                      onClick={() => alert("Fonction de modification à venir")}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => supprimerIngredient(ing.ingredientId)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
