import { useState, useEffect } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import SearchInput from '../../components/searchInput';
import { API_URL } from '../../config/api';
import DataTable from '../../components/DataTable';

// Données de démonstration pour l'historique des paiements
const columns = [
  {
    key: 'ticketId',
    label: 'Ticket #',
  },
  {
    key: 'sellerId',
    label: 'Vendeur',
  },
  {
    key: 'createdAt',
    label: 'Date',
    render: (item) => new Date(item.createdAt).toLocaleString("fr-FR"),
  },
  {
    key: 'products',
    label: 'Produit(s)',
    render: (item) =>
      item.ticketLines.map((line) => line.product.label).join(", "),
  },
  {
    key: 'quantity',
    label: 'Qté totale',
    render: (item) =>
      item.ticketLines.reduce((total, line) => total + line.quantity, 0),
  },
  {
    key: 'amount',
    label: 'Montant',
    render: (item) =>
      parseInt(item.amount).toLocaleString("fr-FR") + " MGA",
  },
];


export default function SalesHistory() {

  const [payments, setPayments] = useState();
  const [filteredPayments, setFilteredPayments] = useState();
  const [searchTerm, setSearchTerm] = useState('')

  const getPaidSalesHistory = async () => {
    try {
      const response = await fetch(`${API_URL}/ticket/history`);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
  
      const data = await response.json();
  
      const formattedHistory = data.map(ticket => {
        const totalQuantity = ticket.ticketLines.reduce((sum, line) => sum + line.quantity, 0);
        const productsArray = ticket.ticketLines.map(line => line.product.label);
      
        return {
          ticketId: ticket.ticketId,
          sellerId: ticket.sellerId,
          createdAt: ticket.createdAt,
          ticketLines: ticket.ticketLines,
          products: productsArray.join(', '),
          quantity: totalQuantity,
          amount: ticket.payment.amount,
          items: productsArray, // Pour recherche produit
          cashierName: ticket.sellerId.toString(), // Pour recherche vendeur
        };
      });
  
      setPayments(formattedHistory);
      setFilteredPayments(formattedHistory);
      
    } catch (error) {
      console.error("Erreur de récupération de l'historique :", error);
    }
  };
  

  useEffect(()=>{

    getPaidSalesHistory()

  },[])

  useEffect(() => {
    if (!payments) return;
  
    const lowerTerm = searchTerm.toLowerCase();
  
    const filtered = payments.filter((payment) =>
      payment.ticketId.toString().includes(lowerTerm) ||
      payment.amount.toString().includes(lowerTerm) ||
      payment.cashierName.toLowerCase().includes(lowerTerm) ||
      payment.items.some(item => item.toLowerCase().includes(lowerTerm))
    );
  
    setFilteredPayments(filtered);
  }, [searchTerm, payments]);
  
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

            <DataTable columns={columns} data={filteredPayments}/>       

          </div>
        </div>
      </div>
    </div>
  );
}