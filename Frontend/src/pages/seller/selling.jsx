import { useEffect, useState } from "react"
import { Search, Minus, Plus } from "lucide-react";
import '../../css/scrollBar.css';
import WineCardList from "../../components/wineCard";
import SearchInput from "../../components/searchInput";

export default function Selling() {
    const[ActiveCategory, setActiveCategory] = useState('Tous');
    const categories = ['Tous', 'Vin blanc', 'Vin rouge'];
    const [panier, setPanier] = useState([]);
    const [total, setTotal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [filteredWines, setFilteredWines] = useState([]);
    const [wineList, setWineList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

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
        stock: 0,
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
    
    useEffect(()=>{
      setWineList(vins);
      setFilteredWines(vins);
    },[])
    
    useEffect(() => {
      let filtered = wineList;
    
      if (ActiveCategory !== 'Tous') {
        filtered = filtered.filter(wine =>
          wine.type.toLowerCase() === ActiveCategory.toLowerCase().replace("vin ", "")
        );
      }
    
      if (searchTerm) {
        filtered = filtered.filter(wine =>
          wine.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    
      setFilteredWines(filtered);
    }, [searchTerm, wineList, ActiveCategory]);
    
    
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

      setTotal(total => total + wine.prix)
    }

    const clearCart = () => {
      setPanier([]);
      setTotal(0)
    };

    const ajustQuantity = (id, ajustement) =>{
      // Trouver l'article dans le panier
    const itemPanier = panier.find(item => item.id === id);
    
    // Trouver le vin correspondant dans la liste des vins pour vérifier le stock
    const vinReference = vins.find(vin => vin.id === id);
    
    if (itemPanier && vinReference) {
      // Si on augmente la quantité, vérifier si le stock est suffisant
      if (ajustement > 0 && itemPanier.quantite >= vinReference.stock) {
        alert(`Désolé, il ne reste que ${vinReference.stock} bouteille(s) de ${itemPanier.nom} en stock.`);
        return;
      }
    }
    
    setPanier(panier.map(item => {
      if (item.id === id) {
        const nouvelleQuantite = item.quantite + ajustement;
        return nouvelleQuantite > 0 ? { ...item, quantite: nouvelleQuantite } : null;
      }
      return item;
    }).filter(Boolean));

      setTotal(total => total + (itemPanier.prix * ajustement))
    }

    const handlePayment = () => {
      setShowModal(true);
    };

    return(
    <div className="w-full h-full flex flex-row items-center gap-3">
     {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-2xl rounded-lg shadow-lg p-6">
            <div className="text-center mb-2">
              <h2 className="text-xl font-bold">Aperçu du ticket</h2>
            </div>

            <div className="text-center mb-4">
              <h1 className="text-2xl font-extrabold text-red-900">Soadivay</h1>
              <p>10 Rue du Vignoble, 75008 Madagascar</p>
              <p>Tel: 01 23 45 67 89</p>
            </div>

            <div className="flex justify-between text-sm mb-4 border-b pb-2">
              <div>
                <p>Date: {new Date().toLocaleDateString('fr-FR')}</p>
                <p>Heure: {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">N° Commande: CMD-{Math.floor(Math.random() * 1000000)}</p>
                <p>Vendeur: Thomas Dubois</p>
              </div>
            </div>

            <table className="w-full mb-4 text-sm">
              <thead className="border-b font-semibold text-left">
                <tr>
                  <th>Article</th>
                  <th className="text-center">Qté</th>
                  <th className="text-right">Prix unitaire</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {panier.map(item => (
                  <tr key={item.id} className="border-b ">
                    <td>
                      {item.nom}
                      <div className="text-xs text-gray-500 italic">Millésime: {item.millesime || "—"}</div>
                    </td>
                    <td className="text-center">{item.quantite}</td>
                    <td className="text-right">{item.prix.toFixed(2)} €</td>
                    <td className="text-right">{(item.prix * item.quantite).toFixed(2)} €</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total à payer:</span>
              <span className="">{total.toFixed(2)} €</span>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </button>
              <button
                className="px-4 py-2 bg-red-900 text-white rounded"
                onClick={() => {
                  alert("Paiement confirmé !");
                  clearCart();
                  setShowModal(false);
                }}
              >
                Confirmer le paiement
              </button>
            </div>
          </div>
        </div>
      )}

        <div className="h-full w-full flex flex-col">
            <div className="w-full p-2 flex flex-col gap-3 h-40">
                <h1 className="text-2xl font-bold">Catalogues de vins</h1>
                <div className="">
                    <SearchInput placeholder={"Recherche par nom"} onChange={setSearchTerm}/>
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
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
                ))}
                </div>  
            </div>
            <div className="scrollable p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-auto overflow-y-auto">
                <WineCardList items = {filteredWines} addToCart={addToCart}/>
            </div>
        </div>
        <div className="md:w-80 lg:w-96 xl:w-[410px] h-[90%]  bg-white rounded-lg shadow p-2 flex flex-col">
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
                        onClick={() => ajustQuantity(item.id, -1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="mx-2">{item.quantite}</span>
                      <button
                        className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                        onClick={() => ajustQuantity(item.id, 1)}
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
            )}
          </div>
          
          {/* Cart Summary */}
          {panier.length > 0 && (
            <div className="pt-2 border-t border-gray-200">
              <div className="flex justify-between text-lg font-bold mb-2">
                <span>Total:</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              
              {/* Actions */}
              <button
                className="w-full py-3 bg-red-900 text-white rounded font-bold mb-2"
                onClick={handlePayment}
              >
                Confirmer le paiement
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

