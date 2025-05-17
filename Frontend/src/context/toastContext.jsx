import { createContext, useState, useContext } from 'react';
import '../css/toast.css'

const ToastContext = createContext();

const Toast = ({ message, type, onClose }) => {
  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'alert':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg ${getToastStyles()} animate-fadeInDown min-w-64 text-center z-50`}>
      <p className="font-medium">{message}</p>
    </div>
  );
};

// Provider qui gère les toasts
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Fonction pour ajouter un toast
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Supprimer le toast après 5 secondes
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  // Fonctions pratiques pour différents types de toasts
  const showSucces = (message) => showToast(message, 'success');
  const showError = (message) => showToast(message, 'error');
  const showAlert = (message) => showToast(message, 'alert');

  return (
    <ToastContext.Provider value={{ showToast, showSucces, showError, showAlert }}>
      {children}
      
      {/* Afficher les toasts actifs */}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
        />
      ))}
    </ToastContext.Provider>
  );
};

// Hook personnalisé pour utiliser les toasts
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast doit être utilisé à l\'intérieur d\'un ToastProvider');
  }
  return context;
};