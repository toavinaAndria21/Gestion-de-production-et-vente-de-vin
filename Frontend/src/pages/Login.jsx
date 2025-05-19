import { useState, useContext } from 'react';
import { API_URL } from '../config/api';
import { AuthContext } from '../context/authContext';
export default function SoadivayLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    console.log("Soumission du formulaire"); 
    setIsLoading(true);
    setErrorMessage('');
  
    if (!email.includes('@')) {
      setErrorMessage('Veuillez entrer une adresse email valide');
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/personnel/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Erreur de connexion');
      }
      console.log(data);
      console.log(data.user, data.token);
      login(data.user, data.token, rememberMe);

      switch(data.user.role) {
        case 'Administrateur':
          window.location.href = '/admin/dashboard';
          break;
        case 'Vendeur':
          window.location.href = '/seller/selling';
          break;
        case 'Producteur':
          window.location.href = '/productor/ingredients';
          break;
      };
  
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
              <div className="flex flex-col md:flex-row h-screen bg-gray-100">
                {/* Partie gauche - logo + texte */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                  <div className="mb-6">
                    {/* Logo bouteille */}
                    <svg className="w-40 h-64" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="100" cy="50" rx="80" ry="40" fill="#741f23" fillOpacity="0.2" />
                      <path d="M70 100 L65 40 H135 L130 100 C130 100 140 120 140 180 V350 C140 360 130 370 120 370 H80 C70 370 60 360 60 350 V180 C60 120 70 100 70 100 Z" fill="#0d2605" />
                      <path d="M80 40 V 20 H120 V40" fill="#0a1e04" />
                      <rect x="80" y="10" width="40" height="10" fill="#8b4513" />
                      <path d="M75 100 V 340 C75 350 75 360 85 360 V100 C85 110 75 110 75 100 Z" fill="#1a3a1a" fillOpacity="0.7" />
                      <rect x="70" y="150" width="60" height="100" rx="3" fill="#f5e9d5" />
                      <rect x="73" y="153" width="54" height="94" rx="2" stroke="#b8860b" strokeWidth="1" fill="none" />
                      <text x="100" y="180" textAnchor="middle" fill="#741f23" fontWeight="bold" fontSize="12">SOADIVAY</text>
                      <path d="M80 190 H120" stroke="#741f23" strokeWidth="1" />
                      <text x="100" y="210" textAnchor="middle" fill="#741f23" fontSize="8">GRAND CRU</text>
                      <text x="100" y="230" textAnchor="middle" fill="#741f23" fontSize="10">2025</text>
                      <rect x="80" y="270" width="40" height="20" rx="2" fill="#f5e9d5" />
                      <text x="100" y="284" textAnchor="middle" fill="#741f23" fontSize="6">BOURGOGNE AOC</text>
                      <rect x="80" y="20" width="40" height="20" fill="#741f23" fillOpacity="0.8" />
                    </svg>
                  </div>

                  <h1 className="text-4xl font-bold text-red-800 mb-2">Soadivay</h1>
                  <p className="text-xl text-center mb-6 px-6 text-black">La solution de gestion viticole par excellence</p>
                  <div className="bg-red-100 text-black p-4 rounded shadow max-w-md text-center">
                    <p className="italic">
                      "De la vigne au verre, maîtrisez chaque étape de votre production avec notre plateforme dédiée aux vignerons passionnés."
                    </p>
                  </div>
                </div>

                {/* Partie droite - formulaire */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                  <div className="w-full max-w-md bg-white p-6 rounded shadow-md space-y-6">
                    <h2 className="text-3xl font-bold text-red-800 text-center">Connexion</h2>

                    {errorMessage && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-center">
                        <p>{errorMessage}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemple@soadivay.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-1">Mot de passe</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-gray-600">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Se souvenir de moi
                      </label>
                      <a href="#" className="text-sm text-red-700 hover:underline">Mot de passe oublié ?</a>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      {isLoading ? 'Connexion...' : 'Se connecter'}
                    </button>
                  </div>
                </div>
              </div>
  );
}
