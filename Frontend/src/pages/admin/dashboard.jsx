import React, { useState } from 'react';
import StatCard from '../../components/statCard';
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

// Données fictives pour la démonstration
const salesData = [
  { name: 'Jan', ventes: 65 },
  { name: 'Fév', ventes: 59 },
  { name: 'Mar', ventes: 80 },
  { name: 'Avr', ventes: 81 },
  { name: 'Mai', ventes: 56 },
  { name: 'Juin', ventes: 55 },
  { name: 'Juil', ventes: 40 }
];

const wineTypeData = [
  { name: 'Rouge', value: 55 },
  { name: 'Blanc', value: 30 },
  { name: 'Rosé', value: 15 }
];

const productionData = [
  { name: 'Jan', production: 42 },
  { name: 'Fév', production: 28 },
  { name: 'Mar', production: 30 },
  { name: 'Avr', production: 33 },
  { name: 'Mai', production: 37 },
  { name: 'Juin', production: 29 },
  { name: 'Juil', production: 25 }
];

const stocksByCategory = [
  { name: 'Bordeaux', stockValue: 25400, quantity: 423 },
  { name: 'Bourgogne', stockValue: 31200, quantity: 246 },
  { name: 'Loire', stockValue: 12800, quantity: 182 },
  { name: 'Rhône', stockValue: 18600, quantity: 305 },
  { name: 'Champagne', stockValue: 22000, quantity: 127 }
];

const COLORS = ['#B91C1C', '#F3F4F6', '#EC4899'];

const recentActivities = [
  { id: 1, type: 'vente', user: 'Jean Dupont', description: 'A vendu 12 bouteilles de Château Margaux 2015', time: 'Il y a 2h' },
  { id: 2, type: 'production', user: 'Marie Cuvier', description: 'A mis en bouteille la cuvée Merlot 2023', time: 'Il y a 3h' },
  { id: 3, type: 'stock', user: 'Paul Martin', description: 'A ajouté 48 bouteilles de Chablis Grand Cru', time: 'Il y a 5h' },
  { id: 4, type: 'vente', user: 'Lucie Bernard', description: 'A vendu 6 bouteilles de Côtes du Rhône 2020', time: 'Il y a 8h' }
];

const lowStockWines = [
  { id: 1, name: "Château Margaux 2015", stock: 3, category: "Bordeaux" },
  { id: 2, name: "Chablis Grand Cru 2018", stock: 5, category: "Bourgogne" },
  { id: 3, name: "Côtes de Provence 2020", stock: 4, category: "Provence" }
];

const statsData = [
    {
      title: "Ventes totales (€)",
      value: "68,459",
      change: "+12.5% depuis le mois dernier",
      trend: "positive",
      icon: <TrendingUp size={24} />,
      iconBg: "bg-red-50",
      iconColor: "text-red-800",
    },
    {
      title: "Bouteilles vendues",
      value: "1,245",
      change: "+8.3% depuis le mois dernier",
      trend: "positive",
      icon: <ShoppingBag size={24} />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-800",
    },
    {
      title: "Bouteilles en stock",
      value: "12,876",
      change: "+2.7% depuis le mois dernier",
      trend: "positive",
      icon: <Package size={24} />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-800",
    },
    {
      title: "Utilisateurs actifs",
      value: "24",
      change: "Sur un total de 28 utilisateurs",
      trend: null, // pas de flèche
      icon: <Users size={24} />,
      iconBg: "bg-green-50",
      iconColor: "text-green-800",
    },
  ];
const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState('mois');
  
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
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex items-center px-4 py-2">
            <Calendar className="text-gray-400 mr-2" size={18} />
            <select 
              className="bg-transparent focus:outline-none text-gray-600"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            >
              <option value="jour">Aujourd'hui</option>
              <option value="semaine">Cette semaine</option>
              <option value="mois">Ce mois</option>
              <option value="annee">Cette année</option>
            </select>
          </div>
          
          <button className="bg-white border border-gray-200 rounded-lg shadow-sm flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50">
            <Filter size={18} className="mr-2" />
            Filtres
          </button>
          
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
              <LineChart data={salesData}>
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
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantité
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valeur (€)
                  </th>
                  <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
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
                      <div className="text-sm text-gray-700">{item.quantity} bouteilles</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{item.stockValue.toLocaleString()} €</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-right">
                      <button className="text-red-800 hover:text-red-600 font-medium text-sm">
                        Détails
                      </button>
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
                <Tooltip formatter={(value) => [`${value}%`, 'Pourcentage']} />
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
            <button className="text-sm text-red-800 font-medium hover:underline">
              Voir tout
            </button>
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
        
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
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
                    <button className="bg-white border border-red-200 text-red-800 hover:bg-red-50 text-sm px-3 py-1 rounded">
                      Commander
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