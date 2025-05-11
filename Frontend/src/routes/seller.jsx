import Selling from "../pages/seller/selling"
import Product from "../pages/seller/product";
import History from "../pages/seller/history";

const sellerRoute = [
    {
        path:'/seller/selling',
        element: <Selling/>
    },
    {
        path:'/seller/products',
        element:<Product/>
    },
    {
        path:'/seller/history',
        element:<History/>
    }
]

export default sellerRoute;