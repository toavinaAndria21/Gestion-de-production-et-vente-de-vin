import React, { useState, useEffect } from 'react';
import StatCard from '../../components/statCard';
import { API_URL } from '../../config/api';
import '../../css/scrollBar.css'
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import { 
  Wine, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  AlertCircle, 
  Package, 
  Calendar, 
  ArrowUpRight, 
  Download, 
  Filter
} from 'lucide-react';


const COLORS = ['#B91C1C', '#F3F4F6', '#EC4899'];


const lowStockWines = [
  { id: 1, name: "Château Margaux 2015", stock: 3, category: "Bordeaux" },
  { id: 2, name: "Chablis Grand Cru 2018", stock: 5, category: "Bourgogne" },
  { id: 3, name: "Côtes de Provence 2020", stock: 4, category: "Provence" }
];

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState('mois');
  const [sellingHistoryData, setSellingHistoryData] = useState([]);
  const [totalBottlesSold, setTotalBottlesSold] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [totalUsersCount, setTotalUsersCount] = useState(0);
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [monthlySalesData, setMonthlySalesData] = useState([]);
  const [productionData, setProductionData] = useState([]);
  const [wineTypeData, setWineTypeData] = useState([]);
  const [stocksByCategory, setStocksByCategory] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [lowStockWines, setLowStockWines] = useState([]);


  const getSellingStats = async () => {
    try {
      const response = await fetch(`${API_URL}/ticketLine/history`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération de l'historique des ventes");
      }
  
      const res = await response.json();
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
  
      const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
      const monthlySalesMap = Array(12).fill(0);
      const wineTypeMap = {};
  
      const fullSales = res.data.map((sale) => {
        const unitPrice = parseFloat(sale.product.price);
        const saleDate = new Date(sale.ticket.createdAt);
        const monthIndex = saleDate.getMonth();
        const wineType = sale.product.type;
      
        monthlySalesMap[monthIndex] += sale.quantity;
        wineTypeMap[wineType] = (wineTypeMap[wineType] || 0) + sale.quantity;
      
        return {
          date: saleDate,
          quantity: sale.quantity,
          price: unitPrice,
          total: unitPrice * sale.quantity,
          product: sale.product, 
          ticket: sale.ticket,      
        };
      });
      
  
      const salesData = monthNames.map((name, index) => ({
        name,
        ventes: monthlySalesMap[index],
      }));
      setMonthlySalesData(salesData);
  
      const wineTypeData = Object.entries(wineTypeMap).map(([type, value]) => ({
        name: type,
        value,
      }));
      setWineTypeData(wineTypeData);

      const filteredData = fullSales.filter(
        (sale) =>
          sale.date.getMonth() === currentMonth &&
          sale.date.getFullYear() === currentYear
      );
      setSellingHistoryData(filteredData);
  
      const totalBottlesSold = filteredData.reduce((acc, sale) => acc + sale.quantity, 0);
      setTotalBottlesSold(totalBottlesSold);
  
      const amount = filteredData.reduce((acc, sale) => acc + sale.total, 0);
      setTotalAmount(amount);
  
      // Génération des 5 dernières activités
      const recentActivities = fullSales
        .sort((a, b) => b.date - a.date)
        .slice(0, 5)
        .map((sale, index) => {
          const diffHours = Math.floor((now - sale.date) / (1000 * 60 * 60));
          return {
            id: index + 1,
            type: 'vente',
            user: `${sale.ticket.seller.name} ${sale.ticket.seller.lastName}`, // Remplace par un champ réel si disponible
            description: `A vendu ${sale.quantity} bouteille(s) de ${sale.product.label}.`,
            time: `Il y a ${diffHours}h`,
          };
        });
      setRecentActivities(recentActivities);
  
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
  
  
  const getProductStock = async () => {
    try {
      const response = await fetch(`${API_URL}/product`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des produits");
      }
  
      const data = await response.json();
  
      // Total stock
      const total = data.reduce((acc, product) => acc + product.stock, 0);
      setTotalStock(total);
  
      // --- Production par mois ---
      const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
      const monthlyProductionMap = Array(12).fill(0);
  
      data.forEach((product) => {
        const createdDate = new Date(product.createdAt);
        const monthIndex = createdDate.getMonth();
        monthlyProductionMap[monthIndex] += 1;
      });
  
      const productionData = monthNames.map((name, index) => ({
        name,
        production: monthlyProductionMap[index],
      }));
      setProductionData(productionData);
  
      // --- Stock par catégorie ---
      const categoryMap = new Map();
  
      data.forEach((product) => {
        const category = product.category;
        const quality = product.vintage?.quality || "Inconnu";
        const stock = product.stock;
        const price = parseFloat(product.price);
  
        const key = `${category}-${quality}`;
  
        if (!categoryMap.has(key)) {
          categoryMap.set(key, {
            name: category,
            quantity: 0,
            stockValue: 0,
            quality: quality,
          });
        }
  
        const entry = categoryMap.get(key);
        entry.quantity += stock;
        entry.stockValue += price * stock;
      });
  
      const stocksByCategory = Array.from(categoryMap.values());
      setStocksByCategory(stocksByCategory);

      //Produits avec un stock faible ---
      const lowStockWines = data
      .filter(product => product.stock < 5)
      .map(product => ({
        id: product.productId,
        name: `${product.label} ${product.vintage?.label || ''}`.trim(),
        stock: product.stock,
        category: product.category,
      }));

      setLowStockWines(lowStockWines); // À condition que tu aies créé ce state

  
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
  

    const getAllUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/personnel`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des utilisateurs");
        }
        const data = await response.json();
        const total = data.length;
        const active = data.filter(user => user.status === "Actif").length;

        setTotalUsersCount(total);
        setActiveUsersCount(active);
      } catch (error) {
        console.error("Erreur:", error);
      }
    }
    const statsData = [
      {
        title: "Ventes totales",
        value: totalAmount.toLocaleString('fr-FR', { style: 'currency', currency: 'MGA' }),
        change:  "Chiffre d’affaires du mois en cours",
        trend: "positive",
        icon: <TrendingUp size={24} />,
        iconBg: "bg-red-50",
        iconColor: "text-red-800",
      },
      {
        title: "Bouteilles vendues",
        value: totalBottlesSold,
        change: `Durant les 30 derniers jours`,
        trend: "positive",
        icon: <ShoppingBag size={24} />,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-800",
      },
      {
        title: "Bouteilles en stock",
        value: totalStock,
        change: "Stock disponible actuellement",
        trend: "positive",
        icon: <Package size={24} />,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-800",
      },
      {
        title: "Utilisateurs actifs",
        value: activeUsersCount,
        change: `Sur un total de ${totalUsersCount} utilisateurs`,
        trend: null,
        icon: <Users size={24} />,
        iconBg: "bg-green-50",
        iconColor: "text-green-800",
      },
    ];
    useEffect(() => {

      getSellingStats();
      getProductStock();
      getAllUsers();
    }
    , []);

  return (
    <div className="px-6 py-4">
      {/* En-tête du dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            Tableau de bord
          </h1>
          <p className="text-gray-500">Bienvenue sur le tableau de bord de Soadivay</p>
        </div>
        
        <div className="flex mt-4 md:mt-0 gap-3">
          
          <button className="bg-red-800 text-white rounded-lg shadow-sm flex items-center px-4 py-2 hover:bg-red-700">
            <Download size={18} className="mr-2" />
            Exporter
          </button>
        </div>
      </div>
      
      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {
        statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
      ))} 
      </div>
      
      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-gray-800">Évolution des ventes</h3>
            <a href="/admin/selling/stats" className="text-sm text-red-800 font-medium hover:underline">
              Voir détails
            </a>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="ventes" 
                  stroke="#B91C1C" 
                  strokeWidth={3} 
                  dot={{ fill: '#B91C1C', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-gray-800">Suivi de production</h3>
            <a href="/admin/production/tracking" className="text-sm text-red-800 font-medium hover:underline">
              Voir détails
            </a>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="production" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Tableaux & Graphiques secondaires */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Inventaire par catégorie</h3>
            <a href="/admin/stocks" className="text-sm text-red-800 font-medium hover:underline">
              Voir tout le stock
            </a>
          </div>
          
          <div className="overflow-x-auto scrollable">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qualité
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantité
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valeur (€)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stocksByCategory.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.quality}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{item.quantity} bouteilles</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{item.stockValue.toLocaleString()} €</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Types de vins vendus</h3>
          </div>
          <div className="h-56 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wineTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {wineTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}`, 'Bouteilles']} />
                <Legend 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  formatter={(value) => (
                    <span className="text-sm font-medium text-gray-700">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Rangée inférieure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Activités récentes</h3>
              <a href="/admin/selling/history" className="text-sm text-red-800 font-medium hover:underline">
                Voir tout
              </a>
            </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex py-2 border-b border-gray-100 last:border-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  activity.type === 'vente' ? 'bg-green-100' : 
                  activity.type === 'production' ? 'bg-blue-100' : 'bg-purple-100'
                }`}>
                  {activity.type === 'vente' ? (
                    <ShoppingBag size={16} className="text-green-600" />
                  ) : activity.type === 'production' ? (
                    <Wine size={16} className="text-blue-600" />
                  ) : (
                    <Package size={16} className="text-purple-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{activity.user}</div>
                  <div className="text-sm text-gray-500">{activity.description}</div>
                  <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 overflow-y-auto scrollable">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <AlertCircle className="text-red-600 mr-2" size={18} />
              <h3 className="font-semibold text-gray-800">Alertes de stock</h3>
            </div>
            <a href="/admin/stocks" className="text-sm text-red-800 font-medium hover:underline">
              Gérer le stock
            </a>
          </div>
          
          {lowStockWines.length > 0 ? (
            <div className="space-y-3">
              {lowStockWines.map((wine) => (
                <div key={wine.id} className="flex items-center justify-between bg-red-50 rounded-lg p-3 border border-red-100">
                  <div>
                    <p className="font-medium text-gray-800">{wine.name}</p>
                    <p className="text-sm text-gray-500">{wine.category}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 font-bold mr-4">
                      {wine.stock} en stock
                    </span>
                    <button className="bg-white border border-red-200 text-red-800 hover:bg-green-100 text-sm px-3 py-1 rounded">
                      Notifier le producteur
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Package size={40} className="mx-auto mb-2 text-gray-300" />
              <p>Aucune alerte de stock pour le moment</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;