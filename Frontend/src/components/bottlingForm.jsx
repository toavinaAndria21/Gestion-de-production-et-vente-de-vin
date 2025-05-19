import React from "react";
import { X, DownloadCloud, Calendar, Plus, Wine } from "lucide-react";

const BottlingForm = ({
  editData,
  selectedCuvee,
  bottlingData,
  bottleTypes,
  labelTypes,
  handleInputChange,
  handleSubmit,
  resetForm,
}) => {
  return (
    <div className="lg:col-span-2 bg-white shadow rounded-lg p-4">
      <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
        {editData ? (
          <>
            <span className="mr-2 bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center">
              <X size={14} className="cursor-pointer" onClick={resetForm} />
            </span>
            Modification de la Mise en Bouteille
          </>
        ) : (
          <>
            <DownloadCloud size={18} className="mr-2 text-red-900" />
            Informations de Mise en Bouteille
          </>
        )}
      </h2>

      {selectedCuvee ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cuvée sélectionnée
              </label>
              <input
                type="text"
                value={selectedCuvee.nom}
                className="border p-2 rounded w-full bg-gray-100"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date de mise en bouteille*
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="dateMiseEnBouteille"
                  value={bottlingData.dateMiseEnBouteille}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
                <Calendar size={16} className="absolute right-2 top-3 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de bouteilles*
              </label>
              <input
                type="number"
                name="nombreBouteilles"
                value={bottlingData.nombreBouteilles}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
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
                className="border p-2 rounded w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de bouteille
              </label>
              <select
                name="typeBouteille"
                value={bottlingData.typeBouteille}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              >
                {bottleTypes.map((bottle) => (
                  <option key={bottle.value} value={bottle.value}>
                    {bottle.label}
                  </option>
                ))}
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
                className="border p-2 rounded w-full"
              >
                {labelTypes.map((label) => (
                  <option key={label.value} value={label.value}>
                    {label.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
              onClick={resetForm}
            >
              Annuler
            </button>
            <button
              type="button"
              className={`text-white px-4 py-2 rounded flex items-center ${
                editData ? "bg-blue-600 hover:bg-blue-700" : "bg-red-900 hover:bg-red-800"
              }`}
              onClick={handleSubmit}
            >
              {editData ? "Mettre à jour" : <>
                <Plus size={18} className="mr-1" /> Enregistrer
              </>}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <Wine size={48} className="mx-auto mb-2 text-gray-400" />
          <p>Veuillez sélectionner une cuvée pour commencer la mise en bouteille</p>
        </div>
      )}
    </div>
  );
};

export default BottlingForm;
