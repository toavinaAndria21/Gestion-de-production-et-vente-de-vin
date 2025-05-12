import Dashboard from "../pages/admin/dashboard";
import Personnel from "../pages/admin/Personnel";
import ProductionHistory from "../pages/admin/productionHistory";
import SellingHistory from "../pages/admin/sellingHistory";
import SellingStat from "../pages/admin/sellingStat";
import Stock from "../pages/admin/stock";
import VintageTrack from "../pages/admin/vintageTrack";

const adminRoute = [
    {
        path:'/admin/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/admin/personnel',
        element:<Personnel/>
    },
    {
        path:'/admin/production/tracking',
        element:<VintageTrack/>
    },
    {
        path:'/admin/production/history',
        element:<ProductionHistory/>
    },
    {
        path:'/admin/selling/stats',
        element:<SellingStat/>
    },
    {
        path:'/admin/selling/history',
        element:<SellingHistory/>
    },
    {
        path:'/admin/stocks',
        element:<Stock/>
    }
];

export default adminRoute;