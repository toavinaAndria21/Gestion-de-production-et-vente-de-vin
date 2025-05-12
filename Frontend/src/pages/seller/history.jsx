import { useState, useEffect } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import SearchInput from '../../components/searchInput';

// Données de démonstration pour l'historique des paiements
const demoPayments = [
  { 
    paymentId: 1, 
    cashierId: "P001", 
    cashierName: "Marie Dupont",
    ticketId: 1001, 
    amount: 89.90, 
    createdAt: "2025-05-10T14:30:00Z",
    items: ["Château Margaux 2018", "Saint-Émilion Grand Cru"]
  },
  { 
    paymentId: 2, 
    cashierId: "P002", 
    cashierName: "Jean Martin",
    ticketId: 1002, 
    amount: 45.00, 
    createdAt: "2025-05-10T15:15:00Z",
    items: ["Moët & Chandon Brut"]
  },
  { 
    paymentId: 3, 
    cashierId: "P001", 
    cashierName: "Marie Dupont",
    ticketId: 1003, 
    amount: 124.30, 
    createdAt: "2025-05-09T11:45:00Z",
    items: ["Côtes de Provence 2021", "Sancerre 2022", "Chablis Premier Cru 2020"]
  },
  { 
    paymentId: 4, 
    cashierId: "P003", 
    cashierName: "Sophie Leclerc",
    ticketId: 1004, 
    amount: 210.50, 
    createdAt: "2025-05-09T16:20:00Z",
    items: ["Châteauneuf-du-Pape 2017", "Gevrey-Chambertin 2019", "Champagne Ruinart"]
  },
  { 
    paymentId: 5, 
    cashierId: "P002", 
    cashierName: "Jean Martin",
    ticketId: 1005, 
    amount: 35.50, 
    createdAt: "2025-05-08T10:05:00Z",
    items: ["Chablis Premier Cru 2020"]
  }
];

export default function SalesHistory() {
  const [payments, setPayments] = useState(demoPayments);
  const [filteredPayments, setFilteredPayments] = useState(demoPayments);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  
  const itemsPerPage = 8;
  
  // Appliquer la recherche et le tri
  useEffect(() => {
    let result = [...payments];
    
    // Filtrer par recherche (ticket, montant, caissier, produits)
    if (searchTerm) {
      result = result.filter(payment => 
        payment.ticketId.toString().includes(searchTerm) ||
        payment.amount.toString().includes(searchTerm) ||
        payment.cashierName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Trier les résultats
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredPayments(result);
    setCurrentPage(1); // Revenir à la première page après recherche
  }, [searchTerm, payments, sortConfig]);
  
  // Gérer le tri
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  // Pagination
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPayments.slice(indexOfFirstItem, indexOfLastItem);
  
  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="text-black p-2">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Historique des Ventes</h1>
        </div>
      </header>

      {/* Contenu principal */}
      <div className="container mx-auto p-2">
        {/* Barre de recherche simplifiée */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <SearchInput placeholder={"Rechercher par ticket, caissier ou produit..."} onChange={setSearchTerm}/>
        </div>
        
        {/* Tableau des ventes amélioré */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    <button 
                      className="flex items-center focus:outline-none" 
                      onClick={() => requestSort('ticketId')}
                    >
                      N° Ticket
                      <ArrowUpDown size={16} className="ml-1 text-gray-400" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    <button 
                      className="flex items-center focus:outline-none" 
                      onClick={() => requestSort('createdAt')}
                    >
                      Date et Heure
                      <ArrowUpDown size={16} className="ml-1 text-gray-400" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    <button 
                      className="flex items-center focus:outline-none" 
                      onClick={() => requestSort('cashierName')}
                    >
                      Caissier
                      <ArrowUpDown size={16} className="ml-1 text-gray-400" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600  tracking-wider hidden lg:table-cell">
                    Produits
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    <button 
                      className="flex items-center ml-auto focus:outline-none" 
                      onClick={() => requestSort('amount')}
                    >
                      Montant
                      <ArrowUpDown size={16} className="ml-1 text-gray-400" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.length > 0 ? (
                  currentItems.map((payment) => (
                    <tr key={payment.paymentId} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-black-800">
                        #{payment.ticketId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(payment.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {payment.cashierName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 hidden lg:table-cell">
                        <div className="max-w-xs truncate">
                          {payment.items.join(", ")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-900 text-right">
                        {payment.amount.toFixed(2)} MGA
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                      Aucune vente trouvée
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination simplifiée */}
          {totalPages > 1 && (
            <div className="px-6 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-200">
              <div className="flex-1 flex justify-between items-center">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                    currentPage === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Précédent
                </button>
                
                <div className="text-sm text-gray-700">
                  Page <span className="font-medium">{currentPage}</span> sur <span className="font-medium">{totalPages}</span>
                </div>
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                    currentPage === totalPages 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  Suivant
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}