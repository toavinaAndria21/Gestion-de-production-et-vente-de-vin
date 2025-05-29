export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">403</h1>
      <p className="mt-4 text-xl text-gray-700 font-semibold">Accès refusé</p>
      <p className="mt-2 text-gray-500 font-medium">Vous n'avez pas les droits nécessaires pour accéder à cette page.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Aller à la page de connexion
      </a>
    </div>
  );
}