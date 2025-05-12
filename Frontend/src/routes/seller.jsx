import Selling from "../pages/seller/selling"
import History from "../pages/seller/history";

const sellerRoute = [
    {
        path:'/seller/selling',
        element: <Selling/>
    },
    {
        path:'/seller/history',
        element:<History/>
    }
]

export default sellerRoute;