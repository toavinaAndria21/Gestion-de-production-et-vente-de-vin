import { useState } from "react"
import { Search, Minus, Plus } from "lucide-react";
import '../../css/scrollBar.css';
export default function Selling() {
    const[ActiveCategory, setActiveCategoey] = useState('Tous');
    const categories = ['Tous', 'Vin blanc', 'Vin rouge'];
    const [panier, setPanier] = useState([]);

    const vins = [
        {
          id: 1,
          nom: "Château Margaux 2018",
          type: "Rouge",
          region: "Bordeaux",
          volume: "750ml",
          prix: 89.90,
          stock: 15,
          image: "🍷"
        },
        {
          id: 2,
          nom: "Chablis Premier Cru 2020",
          type: "Blanc",
          region: "Bourgogne",
          volume: "750ml",
          prix: 35.50,
          stock: 24,
          image: "🍷"
        },
        {
          id: 3,
          nom: "Côtes de Provence 2021",
          type: "Rosé",
          region: "Provence",
          volume: "750ml",
          prix: 18.90,
          stock: 8,
          image: "🍷"
        },
        {
          id: 4,
          nom: "Moët & Chandon Brut",
          type: "Champagne",
          region: "",
          volume: "750ml",
          prix: 45.00,
          stock: 12,
          image: "🍾"
        }
      ];

    const addToCart = (wine) =>{
      // Vérifier d'abord si le stock est disponible
      if (wine.stock <= 0) {
        return;
      }

      const vinExistant = panier.find(item => item.id === wine.id);

      // Vérifier si l'ajout dépasse le stock disponible
      if (vinExistant) {
        if (vinExistant.quantite >= wine.stock) {
          alert(`Désolé, il ne reste que ${wine.stock} bouteille(s) de ${wine.nom} en stock.`);
          return;
        }
        
        setPanier(panier.map(item => 
          item.id === wine.id 
            ? { ...item, quantite: item.quantite + 1 } 
            : item
        ));
      } else {
        setPanier([...panier, { ...wine, quantite: 1 }]);
      }
    }

    const clearCart = () => {
      setPanier([]);
    };

    return(
    <div className="w-full h-full flex flex-row items-center gap-3">
        <div className="h-full w-full flex flex-col">
            <div className="w-full p-2 flex flex-col gap-3 h-40">
                <h1 className="font-bold text-xl">Catalogues de vins</h1>
                <div className="flex">
                    <input
                    type="text"
                    placeholder="Rechercher un vin..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
                    />
                    <button className="bg-red-900 text-white px-4 rounded-r">
                    <Search size={18} />
                    </button>
                </div>
                <div className="flex flex-row gap-6">
                {categories.map(category => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                        ActiveCategory === category
                        ? 'bg-red-800 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategoey(category)}
                >
                    {category}
                </button>
                ))}
                </div>  
            </div>
            <div className="scrollable p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-auto overflow-y-auto">
                <WineCardList items = {vins} addToCart={addToCart}/>
            </div>
        </div>
        <div className="w-80 h-[90%]  bg-white rounded-lg shadow p-2 flex flex-col">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Panier du Client</h2>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto mb-4">
            {panier.length > 0 ? (
              panier.map((item) => (
                <div key={item.id} className="flex mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl mr-3">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{item.nom}</div>
                    <div className="text-red-900 font-bold">{item.prix.toFixed(2)} €</div>
                    <div className="flex items-center mt-1">
                      <button
                        className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                        onClick={() => ajusterQuantite(item.id, -1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="mx-2">{item.quantite}</span>
                      <button
                        className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                        onClick={() => ajusterQuantite(item.id, 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-4">
                Le panier est vide
              </div>
            )}touch src/pages/productor/ingredients.tsx
            touch src/pages/productor/steps.tsx
            touch src/pages/productor/vintage.tsx
            touch src/pages/productor/bottling.tsx
            touch src/pages/productor/products.tsx
            touch src/pages/productor/reports.tsx
            touch src/pages/productor/settings.tsx
          </div>
          
          {/* Cart Summary */}
          {panier.length > 0 && (
            <div className="pt-2 border-t border-gray-200">
              <div className="flex justify-between mb-2">
                <span>Sous-total:</span>
                {/* <span>{sousTotal.toFixed(2)} €</span> */}
              </div>
              <div className="flex justify-between mb-2">
                <span>TVA (20%):</span>
                {/* <span>{tva.toFixed(2)} €</span> */}
              </div>
              <div className="flex justify-between text-lg font-bold mb-2">
                <span>Total:</span>
                {/* <span>{total.toFixed(2)} €</span> */}
              </div>
              
              {/* Actions */}
              <button
                className="w-full py-3 bg-red-900 text-white rounded font-bold mb-2"
                // onClick={genererTicket}
              >
                Générer un Ticket
              </button>
              <button
                className="w-full py-2 border border-red-900 text-red-900 rounded font-medium"
                onClick={clearCart}
              >
                Vider le Panier
              </button>
            </div>
          )}
        </div>
    </div>
    )
}

function WineCardList({items, addToCart}) {

    return(
        <>
        {items.map((wine) => (
            <div key={wine.id} className="bg-white h-[280px] rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl relative">
                {wine.image}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium 
                  ${wine.stock === 0 
                    ? 'bg-red-100 text-red-800' 
                    : wine.stock <= 5 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'}`}>
                  {wine.stock === 0 ? 'Épuisé' : `${wine.stock} en stock`}
                </div>
              </div>
              <div className="p-4">
                <div className="font-bold mb-1">{wine.nom}</div>
                <div className="text-gray-600 text-sm mb-2">
                  {wine.type} • {wine.region} • {wine.volume}
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-red-900">{wine.prix.toFixed(2)} €</div>
                  <div className="text-xs text-gray-500">
                    {wine.stock === 0 ? 'Indisponible' : 'Disponible'}
                  </div>
                </div>
                <button
                  className={`w-full py-1 text-white rounded text-sm 
                    ${wine.stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-900 hover:bg-red-800'}`}
                  onClick={() => wine.stock > 0 && addToCart(wine)}
                  disabled={wine.stock === 0}
                >
                  {wine.stock === 0 ? 'Indisponible' : 'Ajouter'}
                </button>
              </div>
            </div>
          ))}
        </>
    )
}