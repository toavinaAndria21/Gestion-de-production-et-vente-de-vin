import React, { useMemo, useState } from "react";
import { useToast } from "../context/toastContext";

export default function CreateVintage({
  newVintage,
  setNewVintage,
  ingredients,
  steps,
  qualityOptions,
  onSubmit,
}) {
  const [nameError, setNameError] = useState("");
  const { showSucces, showError, showAlert } = useToast();
  // Pattern : 3-30 caractères, lettres (avec accents), chiffres, espaces, tirets
  const labelPattern = /^[a-zA-Z0-9À-ÿ\s\-]{3,30}$/;

  const handleInputChange = (field, value) => {
    setNewVintage({ ...newVintage, [field]: value });

    if (field === "label") {
      if (!labelPattern.test(value.trim())) {
        setNameError(
          "Le nom doit faire entre 3 et 30 caractères, uniquement lettres, chiffres, espaces et tirets"
        );
      } else {
        setNameError("");
      }
    }
  };

  const handleIngredientToggle = (ingredientId) => {
    const existing = newVintage.selectedIngredients.find(
      (i) => i.ingredientId === ingredientId
    );
    if (existing) {
      setNewVintage({
        ...newVintage,
        selectedIngredients: newVintage.selectedIngredients.filter(
          (i) => i.ingredientId !== ingredientId
        ),
      });
    } else {
      setNewVintage({
        ...newVintage,
        selectedIngredients: [
          ...newVintage.selectedIngredients,
          { ingredientId, quantity: 0 },
        ],
      });
    }
  };

  const handleIngredientQuantityChange = (ingredientId, quantity) => {
    setNewVintage({
      ...newVintage,
      selectedIngredients: newVintage.selectedIngredients.map((i) =>
        i.ingredientId === ingredientId
          ? { ...i, quantity: parseFloat(quantity) || 0 }
          : i
      ),
    });
  };

  const handleStepToggle = (stepId) => {
    const selected = newVintage.selectedSteps.includes(stepId);
    setNewVintage({
      ...newVintage,
      selectedSteps: selected
        ? newVintage.selectedSteps.filter((id) => id !== stepId)
        : [...newVintage.selectedSteps, stepId],
    });
  };

  const getIngredientQuantity = (ingredientId) => {
    const found = newVintage.selectedIngredients.find(
      (i) => i.ingredientId === ingredientId
    );
    return found ? found.quantity : "";
  };

  const isIngredientSelected = (ingredientId) =>
    newVintage.selectedIngredients.some((i) => i.ingredientId === ingredientId);

  // Vérifie si quantité demandée dépasse stock dispo
  const quantityErrors = useMemo(() => {
    const errors = {};
    newVintage.selectedIngredients.forEach((i) => {
      const ingredient = ingredients.find(
        (ing) => ing.ingredientId === i.ingredientId
      );
      if (ingredient && i.quantity > ingredient.quantity) {
        errors[i.ingredientId] = `Quantité dépassée (max : ${ingredient.quantity})`;
      }
    });
    return errors;
  }, [newVintage.selectedIngredients, ingredients]);

  const hasErrors = Object.keys(quantityErrors).length > 0 || !!nameError;

  const handleSubmit = () => {
    if (!newVintage.label.trim()) {
      showError("Le nom de la cuvée est requis.");
      return;
    }
    if (nameError) {
      showError(nameError);
      return;
    }
    if (Object.keys(quantityErrors).length > 0) {
      showError("Corrige les erreurs de quantités avant de continuer.");
      return;
    }

    const vintageCopy = { ...newVintage }; // Pour annulation éventuelle

    onSubmit();

    showSucces("Cuvée créée avec succès !", {
      action: {
        label: "Annuler",
        onClick: () => {
          // Logique d'annulation possible ici si dispo
          console.log("Création annulée :", vintageCopy);
          showAlert("Création de la cuvée annulée.");
        },
      },
    });
  };

  return (
    <div className="bg-white shadow p-6 rounded-xl border border-red-100">
      <h2 className="text-xl font-bold mb-4">Créer une nouvelle cuvée</h2>
      <div className="space-y-4">
        {/* Nom cuvée */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nom de la cuvée
          </label>
          <input
            type="text"
            value={newVintage.label}
            onChange={(e) => handleInputChange("label", e.target.value)}
            className={`mt-1 block w-full rounded-md border p-2 shadow-sm ${
              nameError ? "border-red-600" : "border-gray-300"
            }`}
            placeholder="Nom de la cuvée"
            pattern={labelPattern.source}
            title="3-30 caractères, lettres, chiffres, espaces et tirets seulement"
          />
  
          {nameError && (
            <p className="text-red-600 text-sm mt-1">{nameError}</p>
          )}
        </div>

        {/* Qualité */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Qualité
          </label>
          <select
            value={newVintage.quality}
            onChange={(e) => handleInputChange("quality", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2"
          >
            {qualityOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        {/* Ingrédients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ingrédients
          </label>
          <div className="mt-2 space-y-3">
            {ingredients.map((ing) => {
              const isSelected = isIngredientSelected(ing.ingredientId);
              const quantity = getIngredientQuantity(ing.ingredientId);
              const error = quantityErrors[ing.ingredientId];

              return (
                <div key={ing.ingredientId} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      id={`ing-${ing.ingredientId}`}
                      checked={isSelected}
                      onChange={() => handleIngredientToggle(ing.ingredientId)}
                      className="h-4 w-4 text-red-800 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`ing-${ing.ingredientId}`}
                      className="block text-sm text-gray-900 w-48"
                    >
                      {ing.label} ({ing.quantity} disponibles)
                    </label>
                    {isSelected && (
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={quantity}
                        onChange={(e) =>
                          handleIngredientQuantityChange(
                            ing.ingredientId,
                            e.target.value
                          )
                        }
                        className="w-28 p-1 border rounded"
                        placeholder="Qté à prélever"
                      />
                    )}
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm ml-7">{error}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Étapes de vinification */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Étapes de vinification
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {steps.map((step) => (
              <div
                key={step.stepId}
                className="border rounded-md p-3 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`step-${step.stepId}`}
                    checked={newVintage.selectedSteps.includes(step.stepId)}
                    onChange={() => handleStepToggle(step.stepId)}
                    className="h-4 w-4 text-red-800 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`step-${step.stepId}`}
                    className="ml-2 block font-medium text-gray-900"
                  >
                    {step.label}
                  </label>
                </div>
                <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                <p className="text-sm text-gray-500">
                  {step.duration} {step.unit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton de soumission */}
        <div>
          <button
            onClick={handleSubmit}
            disabled={hasErrors}
            className={`px-4 py-2 rounded text-white ${
              hasErrors
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-800 hover:bg-red-700"
            }`}
          >
            Créer la cuvée
          </button>
          {hasErrors && !nameError && (
            <p className="text-red-600 text-sm mt-2">
              Corrige les erreurs de quantités avant de continuer.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
