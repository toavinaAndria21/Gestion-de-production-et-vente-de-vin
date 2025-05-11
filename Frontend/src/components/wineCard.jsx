export default function WineCardList({items, addToCart}) {

    return(
        <>
        {items.map((wine) => (
            <div key={wine.id} className="bg-white max-w-[250px] h-[280px] lg:h-80 rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-44 bg-gray-100 flex items-center justify-center text-4xl relative">
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