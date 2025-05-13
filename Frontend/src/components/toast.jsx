import '../css/toast.css'

export default function Toast({ message, type, onClose }) {

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