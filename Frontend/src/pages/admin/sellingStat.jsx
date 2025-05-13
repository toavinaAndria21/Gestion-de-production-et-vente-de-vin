import { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer 
} from "recharts";
import { Calendar, ChevronDown, ChevronUp, Filter, RefreshCw } from "lucide-react";

// Sample data - in a real application, this would come from API calls to your backend
const sampleSalesData = [
  { month: "Jan", monthlySales: 42000 },
  { month: "Feb", monthlySales: 52000 },
  { month: "Mar", monthlySales: 59000 },
  { month: "Apr", monthlySales: 67000 },
  { month: "May", monthlySales: 55000 },
  { month: "Jun", monthlySales: 73000 },
];

const sampleProductData = [
  { name: "Vintage Rouge 2020", value: 35 },
  { name: "Blanc Premium", value: 25 },
  { name: "Rosé Prestige", value: 20 },
  { name: "Grand Cru 2018", value: 15 },
  { name: "Cuvée Spéciale", value: 5 },
];

const sampleClients = [
  { id: 1, name: "Martin Dupont", purchases: 12500, tickets: 5 },
  { id: 2, name: "Sophie Laurent", purchases: 9800, tickets: 3 },
  { id: 3, name: "Pierre Moreau", purchases: 8700, tickets: 4 },
  { id: 4, name: "Julie Blanc", purchases: 7500, tickets: 2 },
  { id: 5, name: "Thomas Petit", purchases: 6300, tickets: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function SellingStat() {
  const [period, setPeriod] = useState("month");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    totalSales: 348500,
    ticketCount: 127,
    averageTicket: 2744,
    pendingDeliveries: 8
  });

  const handleRefresh = () => {
    setLoading(true);
    // In a real application, you would fetch data here
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Statistiques de Vente</h1>
          
          <div className="flex space-x-4">
            <div className="relative">
              <button
                className="flex items-center bg-white px-4 py-2 rounded-lg shadow text-gray-700 hover:bg-gray-50"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={16} className="mr-2" />
                Filtrer
                {isFilterOpen ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
              </button>
              
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Période</label>
                    <select 
                      className="block w-full p-2 border border-gray-300 rounded-md"
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                    >
                      <option value="day">Jour</option>
                      <option value="week">Semaine</option>
                      <option value="month">Mois</option>
                      <option value="year">Année</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date de début</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <input
                        type="date"
                        className="p-2 flex-grow"
                        value={dateRange.start}
                        onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                      />
                      <Calendar size={16} className="mx-2 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date de fin</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <input
                        type="date"
                        className="p-2 flex-grow"
                        value={dateRange.end}
                        onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                      />
                      <Calendar size={16} className="mx-2 text-gray-500" />
                    </div>
                  </div>
                  
                  <button
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    onClick={() => {
                      handleRefresh();
                      setIsFilterOpen(false);
                    }}
                  >
                    Appliquer
                  </button>
                </div>
              )}
            </div>
            
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
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Ventes totales</h3>
            <p className="text-2xl font-bold">{stats.totalSales.toLocaleString()} €</p>
            <div className="mt-2 text-sm text-green-600">+12% par rapport au mois dernier</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Nombre de tickets</h3>
            <p className="text-2xl font-bold">{stats.ticketCount}</p>
            <div className="mt-2 text-sm text-green-600">+8% par rapport au mois dernier</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Panier moyen</h3>
            <p className="text-2xl font-bold">{stats.averageTicket.toLocaleString()} €</p>
            <div className="mt-2 text-sm text-green-600">+4% par rapport au mois dernier</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Livraisons en attente</h3>
            <p className="text-2xl font-bold">{stats.pendingDeliveries}</p>
            <div className="mt-2 text-sm text-orange-500">2 en retard</div>
          </div>
        </div>
        
        {/* Charts section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Évolution des ventes</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sampleSalesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value)} />
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
                  data={sampleProductData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {sampleProductData.map((entry, index) => (
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
                data={sampleProductData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Part des ventes (%)" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}