import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SellerLayout from "./layouts/seller";
import sellerRoute from "./routes/seller"

const router = createBrowserRouter([
  {
    path: '/seller',
    element: <SellerLayout/>,
    children: sellerRoute
  }
]);

function App() {

  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
  
  export default App;
  