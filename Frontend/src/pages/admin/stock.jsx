import { useState } from 'react';
import SearchInput from '../../components/searchInput';
import DataTable from '../../components/DataTable';

export default function Stock() {
  const columns = [
    { key: "productId", label: "ID" },
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
    {
      key: "price",
      label: "Prix",
      render: (item) => `${(item.price / 1000).toFixed(1)} Ar`
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
      label: "Quantité (kg)",
      render: (item) => `${item.quantity} kg`
    },
    {
      key: "threshold",
      label: "Seuil (kg)",
      render: (item) => `${item.threshold} kg`
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
    },
    {
      key: "actions",
      label: "Actions",
      render: (item) => (
        <button
          className="text-blue-600 border border-blue-600 p-1 rounded font-medium text-xs"
          onClick={() => console.log("Modifier ingrédient ID:", item.ingredientId)}
        >
          Modifier
        </button>
      )
    }
  ];

  const [vins, setVins] = useState([
    {
      productId: 1,
      label: "Vin Rouge Prestige",
      price: 14900,
      createdAt: "2024-12-01T10:00:00Z",
      vintage: { label: "2020", quality: "AOC" },
      format: { label: "Bouteille", quantity: 75 },
      type: "Rouge",
      region: "Bordeaux"
    },
    {
      productId: 2,
      label: "Vin Blanc Sec",
      price: 9900,
      createdAt: "2024-11-20T09:30:00Z",
      vintage: { label: "2021", quality: "IGP" },
      format: { label: "Demi-bouteille", quantity: 37.5 },
      type: "Blanc",
      region: "Alsace"
    },
    {
      productId: 3,
      label: "Rosé Été",
      price: 10900,
      createdAt: "2024-10-12T14:15:00Z",
      vintage: { label: "2022", quality: "Bio" },
      format: { label: "Magnum", quantity: 150 },
      type: "Rosé",
      region: "Provence"
    }
  ]);

  const [ingredients, setIngredients] = useState([
    {
      ingredientId: 1,
      label: "Raisin Rouge",
      quantity: 120.5,
      threshold: 100.0,
      provider: "Domaine Lova",
      createdAt: "2025-04-10T08:30:00Z",
      productor: { name: "Ando", lastName: "Razanajatovo" }
    },
    {
      ingredientId: 2,
      label: "Sucre de Canne",
      quantity: 30,
      threshold: 50,
      provider: "Sucreco",
      createdAt: "2025-04-15T10:00:00Z",
      productor: { name: "Tojo", lastName: "Rakoto" }
    },
    {
      ingredientId: 3,
      label: "Levure Naturelle",
      quantity: 5,
      threshold: 10,
      provider: "BioFerment",
      createdAt: "2025-03-28T12:15:00Z",
      productor: { name: "Lova", lastName: "Andrianarivo" }
    }
  ]);

  const [stockActif, setStockActif] = useState('vins');
  const [filtreType, setFiltreType] = useState('tous');
  const [filtreRegion, setFiltreRegion] = useState('toutes');
  const [recherche, setRecherche] = useState('');

  const typesDeVin = ['tous', ...new Set(vins.map(vin => vin.type))];
  const regionsDeVin = ['toutes', ...new Set(vins.map(vin => vin.region))];

  const vinsFiltres = vins.filter(vin =>
    (filtreType === 'tous' || vin.type === filtreType) &&
    (filtreRegion === 'toutes' || vin.region === filtreRegion) &&
    (
      vin.label.toLowerCase().includes(recherche.toLowerCase()) ||
      vin.region.toLowerCase().includes(recherche.toLowerCase())
    )
  );

  const ingredientsFiltres = ingredients.filter(ingredient =>
    ingredient.label.toLowerCase().includes(recherche.toLowerCase())
  );

  const estEnRupture = (item) => item.quantity === 0;
  const estEnAlerte = (item) => item.quantity > 0 && item.quantity <= item.threshold;

  const stats = [
    {
      title: "Total des vins",
      value: `${vins.length} références`,
      subtitle: "480 bouteilles en stock",
      color: "blue",
    },
    {
      title: "Total des ingrédients",
      value: `${ingredients.length} types`,
      subtitle: `${ingredients.reduce((total, i) => total + i.quantity, 0)} kg au total`,
      color: "green",
    },
    {
      title: "Alertes de stock",
      value: `${ingredients.filter(estEnRupture).length + ingredients.filter(estEnAlerte).length}`,
      subtitle: "Produits en rupture ou sous le seuil d'alerte",
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
          onClick={() => setStockActif('vins')}
          className={`py-2 px-4 font-medium ${stockActif === 'vins'
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700'}`}
        >
          Stock des Vins
        </button>
        <button
          onClick={() => setStockActif('ingredients')}
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
