import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import SellerLayout from "./layouts/seller";
import sellerRoute from "./routes/seller";
import AdminLayout from "./layouts/admin";
import adminRoute from "./routes/admin";
import ProductorLayout from "./layouts/productor";
import productorRoute from "./routes/productor";

const router = createBrowserRouter([
  {
    path: '/seller',
    element: <SellerLayout />,
    children: sellerRoute,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: adminRoute,
  },
  {
    path: '/productor',
    element: <ProductorLayout />,
    children: productorRoute,
  }
]);

function App() {
  return (
    <>
      {/* Toaster global pour les notifications */}
      <Toaster richColors position="top-right" />
      
      {/* Le router de l'application */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
