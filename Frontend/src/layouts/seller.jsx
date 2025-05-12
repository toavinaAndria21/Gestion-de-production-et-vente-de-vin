import Sidebar from "../components/sideBar";
import { ShoppingCart, List, Wine, Users, Settings } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function SellerLayout() {
  const menu = [
    { name: "Nouvelle Vente", path: "/seller/selling", icon: <ShoppingCart size={18} /> },
    { name: "Historique", path: "/seller/history", icon: <List size={18} /> },
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
          <Outlet /> {/* 👈 Ne pas commenter cette ligne ! */}
        </main>
      </div>
    </div>
  );
}
