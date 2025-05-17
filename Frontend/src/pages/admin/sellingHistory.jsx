import { useState, useEffect } from 'react';
import DataTable from '../../components/DataTable';
import { API_URL } from '../../config/api';

export default function SellingHistory() {
  const [historyData, setHistoryData] = useState([]);
  const historyColumns = [
    { key: "date", label: "Date" },
    { key: "product", label: "Produit" },
    { key: "vintage", label: "Millésime" },
    { key: "quantity", label: "Quantité" },
    { key: "price", label: "Prix unitaire" },
    { key: "total", label: "Prix total" },
  ];
  
  const getSellingHistory = async () => {
    try {
      const response = await fetch(`${API_URL}/ticketLine/history`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération de l'historique des ventes");
      }
  
      const res = await response.json();
      const data = res.data.map((sale) => {
        const unitPrice = parseFloat(sale.product.price); 
  
        return {
          date: sale.ticket.createdAt,
          product: sale.product.label,
          vintage: sale.product.vintage.label,
          quantity: sale.quantity,
          price: unitPrice,
          total: unitPrice * sale.quantity,
        };
      });
      setHistoryData(data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
 
  useEffect(() => {

    getSellingHistory();

  }
  , []);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Historique des ventes</h1>
      
      {/* Sales history table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-4 border-b text-gray-800">Détail des transactions</h2>
        <div className="overflow-x-auto">
          <DataTable data = {historyData} columns={historyColumns}/>
        </div>
      </div>
    </div>
  );
}