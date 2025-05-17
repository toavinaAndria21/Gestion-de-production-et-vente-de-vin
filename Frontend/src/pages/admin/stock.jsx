import { useEffect, useState } from 'react';
import SearchInput from '../../components/searchInput';
import DataTable from '../../components/DataTable';
import { API_URL } from '../../config/api';

export default function Stock() {
  const [stockActif, setStockActif] = useState('vins');
  const [filtreType, setFiltreType] = useState('tous');
  const [recherche, setRecherche] = useState('');
  const [vins, setVins] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const columns = [
    { key: "label", label: "Nom" },
    {
      key: "vintage",
      label: "Millésime",
      render: (item) => item.vintage.label
    },
    {
      key: "format",
      label: "Format",
      render: (item) => `${item.format.label} (${item.format.quantity} cL)`
    },
    { key: "stock", label: "Stock" },
    {
      key: "price",
      label: "Prix",
      render: (item) => `${(item.price.toLocaleString('fr-FR'))} Ar`
    },
    {
      key: "createdAt",
      label: "Ajouté le",
      render: (item) => new Date(item.createdAt).toLocaleDateString("fr-FR")
    },
    {
      key: "actions",
      label: "Actions",
      render: (item) => (
        <button
          className="text-blue-600 border border-blue-600 p-1 rounded font-medium text-xs"
          onClick={() => console.log("Modifier produit ID:", item.productId)}
        >
          Modifier
        </button>
      )
    }
  ];

  const ingredientColumns = [
    { key: "ingredientId", label: "ID" },
    { key: "label", label: "Ingrédient" },
    {
      key: "quantity",
      label: "Quantité",
      render: (item) => `${item.quantity} ${item.unit}`
    },
    {
      key: "threshold",
      label: "Seuil",
      render: (item) => `${item.threshold} ${item.unit}`
    },
    { key: "provider", label: "Fournisseur" },
    {
      key: "productor",
      label: "Producteur",
      render: (item) => `${item.productor.name} ${item.productor.lastName}`
    },
    {
      key: "createdAt",
      label: "Ajouté le",
      render: (item) => new Date(item.createdAt).toLocaleDateString("fr-FR")
    }
  ];

  const getAllIngredients = async () => {
    try {
      const response = await fetch(`${API_URL}/ingredient`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des vins');
      }
      const res = await response.json();
      const ingredients = res.data;
      const formatted = ingredients.map((item) => ({
        ingredientId: item.ingredientId,
        label: item.label,
        quantity: parseInt(item.quantity, 10),
        threshold: parseInt(item.threshold, 10),
        unit: item.unit, 
        provider: item.provider,
        createdAt: item.createdAt,
        productor: {
          name: item.productor.name,
          lastName: item.productor.lastName
        }
      }));
  
      setIngredients(formatted);
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  const getAllWines = async () => {
    try {
      const response = await fetch(`${API_URL}/product`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des vins');
      }
      const data = await response.json();
  
      const formatted = data.map((item) => ({
        productId: item.productId,
        label: item.label,
        price: parseInt(item.price, 10),
        createdAt: item.createdAt,
        stock: item.stock,
        vintage: {
          label: item.vintage.label,
          quality: item.vintage.quality,
        },
        format: {
          label: item.format.label,
          quantity: parseFloat(item.format.quantity),
        },
        type: item.type,
      }));
  
      setVins(formatted);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };
  
  
  useEffect(() => {
    
    getAllWines();
    getAllIngredients();

  }, []);

  const typesDeVin = ['tous', ...new Set(vins.map(vin => vin.type))];


  const vinsFiltres = vins.filter(vin =>
    (filtreType === 'tous' || vin.type === filtreType) &&
    (
      vin.label.toLowerCase().includes(recherche.toLowerCase()) 
    )
  );

  const ingredientsFiltres = ingredients.filter(ingredient =>
    ingredient.label.toLowerCase().includes(recherche.toLowerCase())
  );

  const estEnRupture = (item) => item.quantity === 0;
  const estEnAlerte = (item) => item.quantity > 0 && item.quantity <= item.threshold;

  const quantiteParUnite = ingredients.reduce((acc, ing) => {
    const unit = ing.unit || "unités"; // par défaut
    acc[unit] = (acc[unit] || 0) + ing.quantity;
    return acc;
  }, {});
  const outOfStock = vins.filter(vin => vin.stock === 0).length;
  const nbAlerte = ingredients.filter(ingredient => ingredient.quantity > 0 && ingredient.quantity <= ingredient.threshold).length;

  const stats = [
    {
      title: "Total des vins",
      value: `${vins.length} références`,
      subtitle: `${vins.reduce((total, vin) => total + vin.stock, 0)} bouteilles en stock`,
      color: "blue",
    },
    {
      title: "Total des ingrédients",
      value: `${ingredients.length} types`,
      subtitle: Object.entries(quantiteParUnite)
        .map(([unit, total]) => `${total} ${unit}`)
        .join(' + '),
      color: "green"
    },    
    {
      title: "Alertes de stock",
      value: `${outOfStock} produits en rupture`,
      subtitle: `${nbAlerte} ingredients sous le seuil d'alerte`,
      color: "red",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestion des Stocks</h1>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            color={stat.color}
          />
        ))}
      </div>

      <div className="flex mb-6 border-b">
        <button
          onClick={() => {
            setStockActif('vins');
            setRecherche('');
          }}
          className={`py-2 px-4 font-medium ${stockActif === 'vins'
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700'}`}
        >
          Stock des Vins
        </button>
        <button
          onClick={() => {
            setStockActif('ingredients');
            setRecherche('');
          }}
          className={`py-2 px-4 font-medium ${stockActif === 'ingredients'
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700'}`}
        >
          Stock des Ingrédients
        </button>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <SearchInput placeholder={"Rechercher..."} onChange={setRecherche} />
        </div>

        {stockActif === 'vins' && (
          <>
            <div className="w-full md:w-48">
              <select
                value={filtreType}
                onChange={(e) => setFiltreType(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                {typesDeVin.map(type => (
                  <option key={type} value={type}>{type === 'tous' ? 'Tous les types' : type}</option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>

      {stockActif === 'vins' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <DataTable data={vinsFiltres} columns={columns} />
          </div>
        </div>
      )}

      {stockActif === 'ingredients' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <DataTable data={ingredientsFiltres} columns={ingredientColumns} />
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value, subtitle, color }) {
  const textColor = {
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600",
    gray: "text-gray-600",
  }[color] || "text-blue-600";

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
