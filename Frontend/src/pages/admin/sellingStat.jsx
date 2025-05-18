import { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer 
} from "recharts";
import { Calendar, ChevronDown, ChevronUp, Filter, RefreshCw } from "lucide-react";
import { API_URL } from "../../config/api";

// Sample data - in a real application, this would come from API calls to your backend
const sampleSalesData = [
  { month: "Jan", monthlySales: 42000 },
  { month: "Feb", monthlySales: 52000 },
  { month: "Mar", monthlySales: 59000 },
  { month: "Apr", monthlySales: 67000 },
  { month: "May", monthlySales: 55000 },
  { month: "Jun", monthlySales: 73000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function SellingStat() {

  const [period, setPeriod] = useState("month");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [loading, setLoading] = useState(false);
  const [barChartData, setBarCharData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [sellingHistoryData, setSellingHistoryData] = useState([]);
  const [monthlySalesData, setMonthlySalesData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalBottlesSold,setTotalBottlesSold] = useState(0);
  const [stats, setStats] = useState({
    totalSales: 348500,
    ticketCount: 127,
    averageTicket: 2744,
    pendingDeliveries: 8
  });

  const handleRefresh = () => {
    setLoading(true);
    getSellingStats();
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

   const getSellingStats = async () => {
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
        setSellingHistoryData(data);
        const totalBottlesSold = data.reduce((acc, sale) => acc + sale.quantity, 0);
        setTotalBottlesSold(totalBottlesSold);

        const amount = data.reduce((acc, sale) => acc + sale.total, 0);
        setTotalAmount(amount);
        const productSalesMap = {};
        
        data.forEach((sale) => {
          if (productSalesMap[sale.product]) {
            productSalesMap[sale.product] += sale.total;
          } else {
            productSalesMap[sale.product] = sale.total;
          }
        });
    
        // Format pour graphique en barres ou tableau (montant total par produit)
        const barChartData = Object.entries(productSalesMap).map(([name, value]) => ({
          name,
          value,
        }));

        const pieChartData = Object.entries(productSalesMap)
        .map(([name, value]) => ({
          name,
          value: amount > 0 ? Number(((value / amount) * 100).toFixed(2)) : 0,
        }))

        setBarCharData(barChartData);
        setPieChartData(pieChartData);

        //ventes mensuelles
        const monthSalesMap = {};

        data.forEach((sale) => {
          const date = new Date(sale.date);
          const monthIndex = date.getMonth();
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          const month = monthNames[monthIndex];
    
          monthSalesMap[month] = (monthSalesMap[month] || 0) + sale.total;
        });
    
        const monthlySalesData = Object.entries(monthSalesMap).map(([month, monthlySales]) => ({
          month,
          monthlySales,
        })).sort((a, b) => {
          // Pour garantir l'ordre des mois
          const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
        });
        setMonthlySalesData(monthlySalesData);

      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    const produitsParQuantite = {};
    sellingHistoryData.forEach(sale => {
      if (produitsParQuantite[sale.product]) {
        produitsParQuantite[sale.product] += sale.quantity;
      } else {
        produitsParQuantite[sale.product] = sale.quantity;
      }
    });
    
    const produitsLesPlusVendus = Object.entries(produitsParQuantite)
      .map(([product, quantity]) => ({ product, quantity }))
      .sort((a, b) => b.quantity - a.quantity);
    useEffect(() => {

      getSellingStats();

    }
    , []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Statistiques de Vente</h1>
          
          <div className="flex space-x-4">
            <button
              className={`flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 ${loading ? 'opacity-75' : ''}`}
              onClick={handleRefresh}
              disabled={loading}
            >
              <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
              Actualiser
            </button>
          </div>
        </div>
        
        {/* Key metrics cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Montant total des ventes</h3>
          <p className="text-xl font-bold text-blue-600">
            {totalAmount.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' })}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Nombre de transactions</h3>
          <p className="text-xl font-bold text-green-600">{sellingHistoryData.length} Transactions</p>
        </div>
                
        <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Nombre de bouteilles vendues</h3>
          <p className="text-xl font-bold text-green-600">{totalBottlesSold} Bouteilles</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Produit le plus vendu</h3>
          <p className="text-xl font-bold text-purple-600">{produitsLesPlusVendus[0]?.product}</p>
          <p className="text-sm text-gray-500">{produitsLesPlusVendus[0]?.quantity} unités</p>
        </div>
        </div>
        
        {/* Charts section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Évolution des ventes</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlySalesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'MGA' }).format(value)} />
                <Legend />
                <Line type="monotone" dataKey="monthlySales" name="Ventes mensuelles" stroke="#0088FE" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Répartition des produits vendus</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* More detailed stats */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Top products performance chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Performance des produits</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={barChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Part des ventes (MGA)" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}