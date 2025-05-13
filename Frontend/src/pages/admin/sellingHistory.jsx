import { useState } from 'react';

export default function SellingHistory() {
  // Données exemple pour l'historique des ventes
  const [ventes, setVentes] = useState([
    { id: 1, date: '2025-05-10', produit: 'Ordinateur portable', quantite: 2, montant: 1799.99, client: 'Martin Dupont', categorie: 'Informatique' },
    { id: 2, date: '2025-05-09', produit: 'Smartphone', quantite: 5, montant: 549.99, client: 'Sophie Laurent', categorie: 'Téléphonie' },
    { id: 3, date: '2025-05-08', produit: 'Casque audio', quantite: 3, montant: 129.99, client: 'Jean Dubois', categorie: 'Audio' },
    { id: 4, date: '2025-05-07', produit: 'Tablette', quantite: 1, montant: 399.99, client: 'Marie Petit', categorie: 'Informatique' },
    { id: 5, date: '2025-05-06', produit: 'Télévision', quantite: 2, montant: 1299.99, client: 'Pierre Moreau', categorie: 'TV & Vidéo' },
    { id: 6, date: '2025-05-05', produit: 'Smartphone', quantite: 3, montant: 549.99, client: 'Lucie Martin', categorie: 'Téléphonie' },
    { id: 7, date: '2025-05-05', produit: 'Enceinte bluetooth', quantite: 4, montant: 89.99, client: 'Thomas Richard', categorie: 'Audio' },
    { id: 8, date: '2025-05-04', produit: 'Casque audio', quantite: 2, montant: 129.99, client: 'Émilie Blanc', categorie: 'Audio' },
    { id: 9, date: '2025-05-03', produit: 'Ordinateur portable', quantite: 1, montant: 1799.99, client: 'Alexandre Petit', categorie: 'Informatique' },
    { id: 10, date: '2025-05-02', produit: 'Console de jeux', quantite: 3, montant: 499.99, client: 'Julie Legrand', categorie: 'Gaming' },
    { id: 11, date: '2025-05-01', produit: 'Smartphone', quantite: 2, montant: 549.99, client: 'Nicolas Durand', categorie: 'Téléphonie' },
    { id: 12, date: '2025-04-30', produit: 'Imprimante', quantite: 2, montant: 249.99, client: 'Isabelle Moreau', categorie: 'Informatique' },
  ]);

  // Calcul du montant total des ventes
  const montantTotal = ventes.reduce((total, vente) => total + vente.montant * vente.quantite, 0);
  
  // Calcul des produits les plus vendus par quantité
  const produitsParQuantite = {};
  ventes.forEach(vente => {
    if (produitsParQuantite[vente.produit]) {
      produitsParQuantite[vente.produit] += vente.quantite;
    } else {
      produitsParQuantite[vente.produit] = vente.quantite;
    }
  });
  
  const produitsLesPlusVendus = Object.entries(produitsParQuantite)
    .map(([produit, quantite]) => ({ produit, quantite }))
    .sort((a, b) => b.quantite - a.quantite);
  
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Historique des ventes</h1>
      
      {/* Dashboard stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Montant total des ventes</h3>
          <p className="text-2xl font-bold text-blue-600">
            {montantTotal.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Nombre de ventes</h3>
          <p className="text-2xl font-bold text-green-600">{ventes.length}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Produit le plus vendu</h3>
          <p className="text-2xl font-bold text-purple-600">{produitsLesPlusVendus[0]?.produit}</p>
          <p className="text-sm text-gray-500">{produitsLesPlusVendus[0]?.quantite} unités</p>
        </div>
      </div>
      
      {/* Sales history table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-4 border-b text-gray-800">Détail des transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Produit</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Catégorie</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Client</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Quantité</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Prix unitaire</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {ventes.map((vente) => (
                <tr key={vente.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">{new Date(vente.date).toLocaleDateString('fr-FR')}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">{vente.produit}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">{vente.categorie}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">{vente.client}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">{vente.quantite}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 border-b">
                    {vente.montant.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900 border-b">
                    {(vente.montant * vente.quantite).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}