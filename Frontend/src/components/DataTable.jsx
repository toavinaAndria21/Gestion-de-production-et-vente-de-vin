import React, { useState } from "react";

const DataTable = ({ data, columns }) => {
  const itemsPerPage = 10; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1); // État pour la page actuelle

  // Calcul des indices pour la pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Fonction pour aller à la page précédente
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction pour aller à la page suivante
  const handleNext = () => {
    if (data && currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calcul du nombre total de pages
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  return (
    <div className="w-full mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Classe hidden ajoutée pour masquer sur les petits écrans */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-100">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-center text-sm text-gray-500 bg-gray-300">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`py-2 px-3 md:px-4 lg:px-6 font-medium ${column.width || ""}`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 && data.slice(startIndex, endIndex).length > 0 ? (
                data.slice(startIndex, endIndex).map((item, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-t border-gray-100 hover:bg-gray-50 text-center"
                  >
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className={`py-3 px-3 md:px-4 lg:px-6 text-gray-700`}>
                        {column.render ? column.render(item) : item[column.key]}
                      </td>                    
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="py-8 text-center text-gray-500">
                    Aucun résultat trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          {/* Footer de pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm bg-white border-t-2 border-gray-300 w-full h-auto md:h-12 px-4 py-2 md:py-0">
            <div className="footer text-gray-500 mb-2 md:mb-0">
              {data && data.length > 0
                ? `${startIndex + 1} - ${Math.min(endIndex, data.length)} sur ${data.length} éléments`
                : "0 élément"}
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              <button
                className={`px-3 py-1 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 ${
                  data && currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleNext}
                disabled={data ? currentPage === totalPages : true}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
        
        {/* Message pour les petits écrans */}
        <div className="md:hidden p-4 bg-white rounded-lg shadow-sm border border-gray-100 text-center text-gray-500">
          Veuillez utiliser un écran plus large pour visualiser les données.
        </div>
      </div>
    </div>
  );
};

export default DataTable;
