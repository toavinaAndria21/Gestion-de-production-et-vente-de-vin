import { useEffect, useState } from "react";

export default function VintageTrack() {
  const [cuvees, setCuvees] = useState([]);
  const [selectedCuveeId, setSelectedCuveeId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/vintage")
      .then((res) => res.json())
      .then((res) => {
        setCuvees(res.data || []);
        if (res.data.length > 0) {
          setSelectedCuveeId(res.data[0].vintageId);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch des cuvées:", err);
        setLoading(false);
      });
  }, []);

  const selectedCuvee =  Array.isArray(cuvees) ? cuvees.find((c) => c.vintageId === selectedCuveeId) : null;

  const formatDate = (dateString) => {
    if (!dateString) return "En cours";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR");
  };

  if (loading) {
    return <div className="p-6 text-center">Chargement...</div>;
  }

  if (cuvees.length === 0) {
    return <div className="p-6 text-center text-gray-600">Aucune cuvée disponible.</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Suivi de Production de Vins
      </h1>

      {/* Sélecteur de cuvée */}
      <div className="mb-6">
        <label
          htmlFor="cuvee-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Sélectionner une cuvée
        </label>
        <select
          id="cuvee-select"
          className="block w-full md:w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
          value={selectedCuveeId || ""}
          onChange={(e) => setSelectedCuveeId(parseInt(e.target.value))}
        >
          {
            cuvees.length > 0 && cuvees?.map((cuvee) => (
            <option key={cuvee.vintageId} value={cuvee.vintageId}>
              {cuvee.label} ({cuvee.quality})
            </option>
          ))}
        </select>
      </div>

      {selectedCuvee ? (
        <>
          {/* Infos cuvée */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold">{selectedCuvee.label}</h2>
            <p className="text-gray-600">
              Qualité : {selectedCuvee.quality || "N/A"}
            </p>
            <p className="text-gray-600">
              Statut :{" "}
              {selectedCuvee.isComplete ? (
                <span className="text-green-600">Terminé</span>
              ) : (
                <span className="text-amber-600">En cours</span>
              )}
            </p>
            <p className="text-gray-600">
              Créé le : {formatDate(selectedCuvee.createdAt)}
            </p>
          </div>

          {/* Étapes */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="text-xl font-semibold p-4 border-b">
              Étapes de vinification
            </h3>
            {selectedCuvee.steps && selectedCuvee.steps.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Étape</th>
                      <th className="px-4 py-2 text-left">Durée</th>
                      <th className="px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCuvee.steps.map((vs) => (
                      <tr key={vs.vintageStepId} className="border-t">
                        <td className="px-4 py-2">{vs.step.label}</td>
                        <td className="px-4 py-2">
                          {vs.step.duration} {vs.step.unit}
                        </td>
                        <td className="px-4 py-2">{vs.step.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-4 text-gray-600 text-center">Aucune étape disponible.</div>
            )}
          </div>
        </>
      ) : (
        <div className="text-gray-600">Sélectionnez une cuvée pour voir les détails.</div>
      )}
    </div>
  );
}
