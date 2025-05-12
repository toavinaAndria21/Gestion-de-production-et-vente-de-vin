import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SellerLayout from "./layouts/seller";
import sellerRoute from "./routes/seller";
import AdminLayout from "./layouts/admin";
import adminRoute from "./routes/admin";

const router = createBrowserRouter([
  {
    path: '/seller',
    element: <SellerLayout/>,
    children: sellerRoute
  },
  {
    path:'/admin',
    element:<AdminLayout/>,
    children: adminRoute
  }

]);

function App() {

  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
  
  export default App;
  