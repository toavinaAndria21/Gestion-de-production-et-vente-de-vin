import { useState, useEffect } from "react";
import { Plus, Save, X, AlertCircle } from "lucide-react";

// Configuration des champs pour chaque modèle
const fieldConfigs = {
  ingredient: [
    {
      key: "label",
      label: "Nom de l'ingrédient",
      type: "text",
      required: true,
      placeholder: "Ex: Farine de blé",
      validation: {
        minLength: 2,
        maxLength: 100,
        pattern: /^[a-zA-ZÀ-ÿ\s\-']+$/,
        patternMessage: "Seules les lettres, espaces, tirets et apostrophes sont autorisés"
      }
    },
    {
      key: "quantity",
      label: "Quantité",
      type: "number",
      required: true,
      placeholder: "0.00",
      validation: {
        min: 0,
        step: 0.01,
        max: 999999.99
      },
      suffix: "kg"
    },
    {
      key: "threshold",
      label: "Seuil d'alerte",
      type: "number",
      required: true,
      placeholder: "0.00",
      validation: {
        min: 0,
        step: 0.01,
        max: 999999.99
      },
      suffix: "kg"
    },
    {
      key: "provider",
      label: "Fournisseur",
      type: "text",
      required: true,
      placeholder: "Ex: Moulin de la Vallée",
      validation: {
        minLength: 2,
        maxLength: 100
      }
    }
  ],
  step: [
    {
      key: "label",
      label: "Nom de l'étape",
      type: "text",
      required: true,
      placeholder: "Ex: Fermentation",
      validation: {
        minLength: 2,
        maxLength: 100
      }
    },
    {
      key: "duration",
      label: "Durée",
      type: "number",
      required: true,
      placeholder: "0",
      validation: {
        min: 1,
        max: 999999
      }
    },
    {
      key: "unit",
      label: "Unité",
      type: "select",
      required: true,
      options: [
        { value: "minutes", label: "Minutes" },
        { value: "heures", label: "Heures" },
        { value: "jours", label: "Jours" },
      ]
    },
    {
      key: "description",
      label: "Description",
      type: "textarea",
      required: true,
      placeholder: "Décrivez les détails de cette étape...",
      validation: {
        minLength: 10,
        maxLength: 500
      }
    }
  ],
  vintage: [
    {
      key: "label",
      label: "Nom de la cuvée",
      type: "text",
      required: true,
      placeholder: "Ex: Cuvée Prestige 2024",
      validation: {
        minLength: 2,
        maxLength: 100
      }
    },
    {
      key: "quality",
      label: "Qualité",
      type: "select",
      required: true,
      options: [
        { value: "STANDARD", label: "Standard" },
        { value: "PREMIUM", label: "Premium" },
        { value: "PRESTIGE", label: "Prestige" }
      ]
    }
  ],
  ticket: [
    {
      key: "clientId",
      label: "Client",
      type: "select",
      required: true,
      // Options à charger dynamiquement
      optionsEndpoint: "client"
    },
    {
      key: "state",
      label: "État",
      type: "select",
      required: true,
      options: [
        { value: "PENDING", label: "En attente" },
        { value: "PROCESSING", label: "En traitement" },
        { value: "DELIVERED", label: "Livré" },
        { value: "CANCELLED", label: "Annulé" }
      ]
    }
  ]
};

const GenericForm = ({
  modelType,
  initialData = {},
  onSubmit,
  onCancel,
  isEditing = false,
  isLoading = false,
  className = ""
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [selectOptions, setSelectOptions] = useState({});

  const fields = fieldConfigs[modelType] || [];

  // Initialisation des données du formulaire
  useEffect(() => {
    const initData = {};
    fields.forEach(field => {
      initData[field.key] = initialData[field.key] || 
        (field.type === 'number' ? '' : '');
    });
    setFormData(initData);
    setErrors({});
    setTouched({});
  }, [initialData, modelType]);

  // Chargement des options dynamiques pour les selects
  useEffect(() => {
    const loadSelectOptions = async () => {
      const optionsToLoad = {};
      
      for (const field of fields) {
        if (field.optionsEndpoint) {
          try {
            // Ici vous devrez importer votre fonction fetchAll
            // const options = await fetchAll(field.optionsEndpoint);
            // optionsToLoad[field.key] = options.map(item => ({
            //   value: item.id || item[`${field.optionsEndpoint}Id`],
            //   label: item.label || item.name || item.title
            // }));
            
            // Pour l'exemple, on simule des données
            optionsToLoad[field.key] = [
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" }
            ];
          } catch (error) {
            console.error(`Erreur lors du chargement des options pour ${field.key}:`, error);
          }
        }
      }
      
      setSelectOptions(optionsToLoad);
    };

    loadSelectOptions();
  }, [modelType]);

  // Validation d'un champ
  const validateField = (field, value) => {
    const { validation, required, type } = field;
    const errors = [];

    // Validation required
    if (required && (!value || value.toString().trim() === '')) {
      errors.push('Ce champ est obligatoire');
      return errors;
    }

    // Si le champ n'est pas requis et vide, pas de validation
    if (!value || value.toString().trim() === '') {
      return errors;
    }

    if (validation) {
      // Validation longueur
      if (validation.minLength && value.length < validation.minLength) {
        errors.push(`Minimum ${validation.minLength} caractères`);
      }
      if (validation.maxLength && value.length > validation.maxLength) {
        errors.push(`Maximum ${validation.maxLength} caractères`);
      }

      // Validation numérique
      if (type === 'number') {
        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
          errors.push('Valeur numérique invalide');
        } else {
          if (validation.min !== undefined && numValue < validation.min) {
            errors.push(`Valeur minimum: ${validation.min}`);
          }
          if (validation.max !== undefined && numValue > validation.max) {
            errors.push(`Valeur maximum: ${validation.max}`);
          }
        }
      }

      // Validation pattern
      if (validation.pattern && !validation.pattern.test(value)) {
        errors.push(validation.patternMessage || 'Format invalide');
      }
    }

    return errors;
  };

  // Validation de tous les champs
  const validateAllFields = () => {
    const newErrors = {};
    let hasErrors = false;

    fields.forEach(field => {
      const fieldErrors = validateField(field, formData[field.key]);
      if (fieldErrors.length > 0) {
        newErrors[field.key] = fieldErrors;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  };

  // Gestion du changement de valeur
  const handleChange = (fieldKey, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldKey]: value
    }));

    // Validation en temps réel si le champ a été touché
    if (touched[fieldKey]) {
      const field = fields.find(f => f.key === fieldKey);
      const fieldErrors = validateField(field, value);
      setErrors(prev => ({
        ...prev,
        [fieldKey]: fieldErrors.length > 0 ? fieldErrors : undefined
      }));
    }
  };

  // Gestion du blur
  const handleBlur = (fieldKey) => {
    setTouched(prev => ({
      ...prev,
      [fieldKey]: true
    }));

    const field = fields.find(f => f.key === fieldKey);
    const fieldErrors = validateField(field, formData[fieldKey]);
    setErrors(prev => ({
      ...prev,
      [fieldKey]: fieldErrors.length > 0 ? fieldErrors : undefined
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Marquer tous les champs comme touchés
    const allTouched = {};
    fields.forEach(field => {
      allTouched[field.key] = true;
    });
    setTouched(allTouched);

    // Validation complète
    if (!validateAllFields()) {
      return;
    }

    // Préparation des données pour l'API
    const submitData = { ...formData };
    
    // Conversion des types
    fields.forEach(field => {
      if (field.type === 'number' && submitData[field.key] !== '') {
        submitData[field.key] = parseFloat(submitData[field.key]);
      }
    });

    onSubmit(submitData);
  };

  // Rendu d'un champ
  const renderField = (field) => {
    const { key, label, type, placeholder, required, options, suffix } = field;
    const value = formData[key] || '';
    const fieldErrors = errors[key];
    const hasError = fieldErrors && fieldErrors.length > 0;

    const baseInputClass = `
      w-full px-3 py-2 border rounded-lg transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400
      ${hasError 
        ? 'border-red-400 bg-red-50' 
        : 'border-gray-300 hover:border-gray-400'
      }
    `;

    const renderInput = () => {
      switch (type) {
        case 'textarea':
          return (
            <textarea
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              onBlur={() => handleBlur(key)}
              placeholder={placeholder}
              rows={4}
              className={`${baseInputClass} resize-none`}
            />
          );

        case 'select':
          const selectOptions = options || selectOptions[key] || [];
          return (
            <select
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              onBlur={() => handleBlur(key)}
              className={baseInputClass}
            >
              <option value="">Sélectionner...</option>
              {selectOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );

        case 'number':
          return (
            <div className="relative">
              <input
                type="number"
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                onBlur={() => handleBlur(key)}
                placeholder={placeholder}
                step={field.validation?.step || 'any'}
                min={field.validation?.min}
                max={field.validation?.max}
                className={baseInputClass}
              />
              {suffix && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  {suffix}
                </span>
              )}
            </div>
          );

        default:
          return (
            <input
              type={type}
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              onBlur={() => handleBlur(key)}
              placeholder={placeholder}
              className={baseInputClass}
            />
          );
      }
    };

    return (
      <div key={key} className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        {renderInput()}
        
        {hasError && (
          <div className="flex items-center space-x-1 text-red-600 text-sm">
            <AlertCircle size={14} />
            <span>{fieldErrors[0]}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`bg-white shadow-lg rounded-xl border border-red-100 ${className}`}>
      <div className="p-6">
        <h2 className="font-semibold text-gray-700 mb-6 text-lg">
          {isEditing ? `Modifier ${modelType}` : `Ajouter ${modelType}`}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fields.map(renderField)}
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                disabled={isLoading}
              >
                <div className="flex items-center space-x-2">
                  <X size={16} />
                  <span>Annuler</span>
                </div>
              </button>
            )}
            
            <button
              type="submit"
              className="px-6 py-2 bg-red-900 hover:bg-red-800 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <div className="flex items-center space-x-2">
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Chargement...</span>
                  </>
                ) : (
                  <>
                    {isEditing ? <Save size={16} /> : <Plus size={16} />}
                    <span>{isEditing ? 'Enregistrer' : 'Ajouter'}</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenericForm;