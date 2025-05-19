import Sidebar from "../components/sideBar";
import { Layers, CircleGauge, LayoutDashboard, UsersRound, Grape, Wine, History, ChartColumnIncreasing } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
export default function AdminLayout() {

    const { user } = useContext(AuthContext);
    
    const menu = [
        {
          name: "Tableau de bord",
          icon: <CircleGauge />,
          path: "/admin/dashboard",
        },
        {
            name: "Personnels",
            icon: <UsersRound />,
            path: "/admin/personnel",
        },  
        {
          name: "Production",
          icon: <Grape />,
          submenu: [
            { name: "Suivi des cuvées", icon: <Wine />, path: "/admin/production/tracking" },
            { name: "Historique", icon: <History />, path: "/admin/production/history" },
          ],
        },
        {
            name: "Ventes",
            icon: <LayoutDashboard />,
            submenu: [
                { name: "Statistiques", icon: <ChartColumnIncreasing />, path: "/admin/selling/stats" },
                { name: "Historique", icon: <History />, path: "/admin/selling/history" },
              ],
        },
        {
            name: "Stocks",
            icon: <Layers />,
            path: "/admin/stocks",
        },    

      ];
      

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div className="flex-none">
        <Sidebar menuItems={menu} user={user}/>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        <main className="h-full overflow-y-auto p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
