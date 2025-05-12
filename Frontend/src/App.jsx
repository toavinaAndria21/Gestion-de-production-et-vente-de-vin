import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SellerLayout from "./layouts/seller";
import sellerRoute from "./routes/seller";
import ProductorLayout from "./layouts/productor";
import productorRoute from "./routes/productor";

const router = createBrowserRouter([
  {
    path: '/seller',
    element: <SellerLayout/>,
    children: sellerRoute
  },
  {
    path: '/productor',
    element: <ProductorLayout/>,
    children: productorRoute
  }
]);

function App() {

  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
  
  export default App;
  