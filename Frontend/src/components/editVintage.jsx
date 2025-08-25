import { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';

export default function EditVintage({ 
  vintage, 
  ingredients, 
  steps, 
  qualityOptions, 
  onSubmit, 
  onCancel, 
  loading 
}) {
  const [formData, setFormData] = useState({
    label: '',
    quality: 'Standard',
    selectedIngredients: [],
    selectedSteps: []
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (vintage) {
      setFormData({
        label: vintage.label || '',
        quality: vintage.quality || 'Standard',
        selectedIngredients: vintage.ingredients?.map(vi => ({
          ingredientId: vi.ingredient.ingredientId,
          quantityUsed: vi.quantityUsed,
          label: vi.ingredient.label,
          unit: vi.ingredient.unit
        })) || [],
        selectedSteps: vintage.steps?.map(vs => ({
          stepId: vs.step.stepId,
          label: vs.step.label,
          duration: vs.step.duration,
          unit: vs.step.unit
        })) || []
      });
    }
  }, [vintage]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.label.trim()) {
      newErrors.label = 'Le nom de la cuvée est requis';
    }

    if (formData.selectedIngredients.length === 0) {
      newErrors.ingredients = 'Au moins un ingrédient doit être sélectionné';
    }

    if (formData.selectedSteps.length === 0) {
      newErrors.steps = 'Au moins une étape doit être sélectionnée';
    }

    // Vérifier que toutes les quantités d'ingrédients sont valides
    formData.selectedIngredients.forEach((ingredient, index) => {
      if (!ingredient.quantityUsed || ingredient.quantityUsed <= 0) {
        newErrors[`ingredient_${index}`] = 'Quantité invalide';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
  };

  const handleIngredientToggle = (ingredient) => {
    const isSelected = formData.selectedIngredients.some(
      si => si.ingredientId === ingredient.ingredientId
    );

    if (isSelected) {
      setFormData(prev => ({
        ...prev,
        selectedIngredients: prev.selectedIngredients.filter(
          si => si.ingredientId !== ingredient.ingredientId
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        selectedIngredients: [...prev.selectedIngredients, {
          ingredientId: ingredient.ingredientId,
          quantityUsed: 1,
          label: ingredient.label,
          unit: ingredient.unit
        }]
      }));
    }
  };

  const handleStepToggle = (step) => {
    const isSelected = formData.selectedSteps.some(
      ss => ss.stepId === step.stepId
    );

    if (isSelected) {
      setFormData(prev => ({
        ...prev,
        selectedSteps: prev.selectedSteps.filter(
          ss => ss.stepId !== step.stepId
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        selectedSteps: [...prev.selectedSteps, {
          stepId: step.stepId,
          label: step.label,
          duration: step.duration,
          unit: step.unit
        }]
      }));
    }
  };

  const updateIngredientQuantity = (ingredientId, quantity) => {
    setFormData(prev => ({
      ...prev,
      selectedIngredients: prev.selectedIngredients.map(ingredient =>
        ingredient.ingredientId === ingredientId
          ? { ...ingredient, quantityUsed: parseFloat(quantity) || 0 }
          : ingredient
      )
    }));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom de la cuvée */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de la cuvée *
          </label>
          <input
            type="text"
            value={formData.label}
            onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.label ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nom de la cuvée"
          />
          {errors.label && (
            <p className="mt-1 text-sm text-red-600">{errors.label}</p>
          )}
        </div>

        {/* Qualité */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Qualité *
          </label>
          <select
            value={formData.quality}
            onChange={(e) => setFormData(prev => ({ ...prev, quality: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {qualityOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Sélection des ingrédients */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingrédients * ({formData.selectedIngredients.length} sélectionné(s))
          </label>
          {errors.ingredients && (
            <p className="mb-2 text-sm text-red-600">{errors.ingredients}</p>
          )}
          <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-md p-3">
            {ingredients.map(ingredient => {
              const isSelected = formData.selectedIngredients.some(
                si => si.ingredientId === ingredient.ingredientId
              );
              const selectedIngredient = formData.selectedIngredients.find(
                si => si.ingredientId === ingredient.ingredientId
              );

              return (
                <div key={ingredient.ingredientId} className="mb-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleIngredientToggle(ingredient)}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700 flex-1">
                      {ingredient.label} (Stock: {ingredient.quantity} {ingredient.unit})
                    </label>
                  </div>
                  {isSelected && (
                    <div className="mt-2 ml-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0.1"
                          step="0.1"
                          value={selectedIngredient?.quantityUsed || ''}
                          onChange={(e) => updateIngredientQuantity(ingredient.ingredientId, e.target.value)}
                          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Qté"
                        />
                        <span className="text-sm text-gray-600">{ingredient.unit}</span>
                      </div>
                      {errors[`ingredient_${formData.selectedIngredients.findIndex(si => si.ingredientId === ingredient.ingredientId)}`] && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors[`ingredient_${formData.selectedIngredients.findIndex(si => si.ingredientId === ingredient.ingredientId)}`]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sélection des étapes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Étapes de production * ({formData.selectedSteps.length} sélectionnée(s))
          </label>
          {errors.steps && (
            <p className="mb-2 text-sm text-red-600">{errors.steps}</p>
          )}
          <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-md p-3">
            {steps.map(step => {
              const isSelected = formData.selectedSteps.some(
                ss => ss.stepId === step.stepId
              );

              return (
                <div key={step.stepId} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleStepToggle(step)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    {step.label} ({step.duration} {step.unit})
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Récapitulatif */}
        {(formData.selectedIngredients.length > 0 || formData.selectedSteps.length > 0) && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Récapitulatif</h4>
            
            {formData.selectedIngredients.length > 0 && (
              <div className="mb-3">
                <h5 className="text-sm font-medium text-gray-700 mb-1">Ingrédients :</h5>
                <div className="text-sm text-gray-600">
                  {formData.selectedIngredients.map(ingredient => (
                    <div key={ingredient.ingredientId}>
                      • {ingredient.label}: {ingredient.quantityUsed} {ingredient.unit}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {formData.selectedSteps.length > 0 && (
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-1">Étapes :</h5>
                <div className="text-sm text-gray-600">
                  {formData.selectedSteps.map((step, index) => (
                    <div key={step.stepId}>
                      {index + 1}. {step.label} ({step.duration} {step.unit})
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Boutons d'action */}
        <div className="flex gap-3 justify-end pt-4 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition disabled:opacity-50 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {loading ? 'Modification...' : 'Modifier la cuvée'}
          </button>
        </div>
      </form>
    </div>
  );
}