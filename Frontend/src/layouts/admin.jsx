import Sidebar from "../components/sideBar";
import { WalletCards, LayoutDashboard } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function SellerLayout() {
    const menu = [
        {
          name: "Tableau de bord",
          icon: <LayoutDashboard />,
          path: "/admin/dashboard",
        },
        {
            name: "Personnels",
            icon: <LayoutDashboard />,
            path: "/admin/personnel",
        },  
        {
          name: "Production",
          icon: <LayoutDashboard />,
          submenu: [
            { name: "Suivi des cuvées", icon: <WalletCards />, path: "/admin/production/tracking" },
            { name: "Historique", icon: <WalletCards />, path: "/admin/production/history" },
          ],
        },
        {
            name: "Ventes",
            icon: <LayoutDashboard />,
            submenu: [
                { name: "Statistiques", icon: <WalletCards />, path: "/admin/selling/stats" },
                { name: "Historique", icon: <WalletCards />, path: "/admin/selling/history" },
              ],
        },
        {
            name: "Stocks",
            icon: <LayoutDashboard />,
            path: "/admin/stocks",
        },    

      ];
      

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div className="flex-none">
        <Sidebar menuItems={menu} />
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
