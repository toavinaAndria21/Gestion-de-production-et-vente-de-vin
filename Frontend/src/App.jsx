import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SellerLayout from "./layouts/seller";
import sellerRoute from "./routes/seller";
import AdminLayout from "./layouts/admin";
import adminRoute from "./routes/admin";
import ProductorLayout from "./layouts/productor";
import productorRoute from "./routes/productor";
import SoadivayLoginForm from "./pages/Login";
import { ToastProvider } from "./context/toastContext";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

const router = createBrowserRouter([
  {
    path: '/',
    element: <SoadivayLoginForm/>,
    errorElement: <div>Page not found</div>
  },
  {
    path: '/seller',
    element: (
      <PrivateRoute requiredRole="Vendeur">
        <SellerLayout />
      </PrivateRoute>
    ),
    children: sellerRoute,
  },
  {
    path: '/admin',
    element: (
      <PrivateRoute requiredRole="Administrateur">
        <AdminLayout />
      </PrivateRoute>
    ),
    children: adminRoute,
  },
  {
    path: '/productor',
    element: (
      <PrivateRoute requiredRole="Producteur">
        <ProductorLayout />
      </PrivateRoute>
    ),
    children: productorRoute,
  },
  {
    path: '/unauthorized',
    element: <Unauthorized/>
  },
  {
    path: '*',
    element: <NotFound/>,
  }
]);

function App() {

  return(
    <AuthProvider>
      <ToastProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App;
