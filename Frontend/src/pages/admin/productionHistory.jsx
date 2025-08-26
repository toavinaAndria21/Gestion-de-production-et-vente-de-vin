import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DataTable from '../../components/dataTable';
import { API_URL } from '../../config/api';

export default function ProductionHistory() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productions, setProductions] = useState([]);
  const [loading, setLoading] = useState(true);

  const openModal = (products) => {
    setSelectedProducts(products);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProducts([]);
  };

  const columns = [
    { key: "label", label: "Cuvée" },
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

  useEffect(() => {
    const fetchProductions = async () => {
      try {
        const response = await fetch(`${API_URL}/vintage/production/history`); 
        if (!response.ok) throw new Error('Erreur API');
        const data = await response.json();
        setProductions(data);
      } catch (error) {
        console.error('Erreur lors de la récupération:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductions();
  }, []);

  if (loading) return <p className="p-6">Chargement...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Historique de Production</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-4 border-b text-gray-800">Détail des productions</h2>
        <div className="overflow-x-auto">
          <DataTable data={productions} columns={columns} />
        </div>
      </div>

      <ImprovedModal selectedProducts={selectedProducts} modalOpen={modalOpen} closeModal={closeModal}/>
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
