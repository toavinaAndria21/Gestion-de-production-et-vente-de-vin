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

const router = createBrowserRouter([
  {
    path: '/',
    element: <SoadivayLoginForm/>,
    errorElement: <div>Page not found</div>
  },
  {
    path: '/seller',
    element: <SellerLayout/>,
    children: sellerRoute
  },
  {
    path:'/admin',
    element:<AdminLayout/>,
    children: adminRoute
  },
  {
    path: '/productor',
    element: <ProductorLayout/>,
    children: productorRoute
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
  