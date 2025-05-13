import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DataTable from '../../components/DataTable';

export default function ProductionHistory() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const openModal = (products) => {
    setSelectedProducts(products);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProducts([]);
  };

  const columns = [
    { key: "label", label: "Année" },
    { key: "quality", label: "Qualité" },
    { key: "productor", label: "Producteur" },
    { key: "createdAt", label: "Date de production" },
    {
      key: "products",
      label: "Produits générés",
      render: (item) => (
        <button
          className="text-blue-600 hover:underline"
          onClick={() => openModal(item.products)}
        >
          Voir détails
        </button>
      ),
    },
  ];

  const [productions, setProductions] = useState([
    {
      label: "2022",
      quality: "AOC",
      createdAt: "2024-10-12",
      productor: "Jean Dupont",
      products: [
        { label: "Rouge Prestige", format: "Bouteille 75 cL", price: "14900" },
        { label: "Blanc Fruité", format: "Magnum 150 cL", price: "25900" }
      ]
    },
    {
      label: "2023",
      quality: "Bio",
      createdAt: "2025-03-05",
      productor: "Marie Leblanc",
      products: [
        { label: "Rosé Été", format: "Bouteille 75 cL", price: "12900" }
      ]
    }
  ]);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Historique de Production</h1>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Quantité totale produite</h3>
          <p className="text-2xl font-bold text-blue-600">X unités</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Temps total de production</h3>
          <p className="text-2xl font-bold text-green-600">X heures</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Produit le plus fabriqué</h3>
          <p className="text-2xl font-bold text-purple-600">Nom</p>
          <p className="text-sm text-gray-500">X unités</p>
        </div>
      </div>

      {/* Tableau */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-4 border-b text-gray-800">Détail des productions</h2>
        <div className="overflow-x-auto">
          <DataTable data={productions} columns={columns} />
        </div>
      </div>

      {/* Modal animé */}
      <ImprovedModal selectedProducts={selectedProducts} modalOpen={modalOpen} closeModal={() => setModalOpen(false)}/>
    </div>
  );
}

function ImprovedModal({ modalOpen, closeModal, selectedProducts }) {
    return (
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-lg w-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Produits générés</h2>
                
                <ul className="space-y-3 mb-6">
                  {selectedProducts && selectedProducts.map((p, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">•</span>
                      <div>
                        <strong>{p.label}</strong>
                        <span className="mx-1">—</span>
                        <span className="text-gray-600">{p.format}</span>
                        <span className="mx-1">—</span>
                        <span>{Number(p.price).toLocaleString()} Ar</span>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="text-right">
                  <button
                    className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors"
                    onClick={closeModal}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }