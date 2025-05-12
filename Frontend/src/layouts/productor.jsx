import Sidebar from "../components/sideBar";
import {  Component, List, Users } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function ProductorLayout() {
  const menu = [
    { name: "Ingrédients", path: "/productor/ingredients", icon: <Component size={18} /> },
    { name: "Étapes de vinification", path: "/productor/steps", icon: <List size={18} /> },
    { name: "Cuvées de vins", path: "/productor/vintage", icon: <List size={18} /> },
    { name: "Mise en bouteilles", path: "/productor/bottling", icon: <List size={18} /> },
    { name: "Rapports", path: "/productor/reports", icon: <Users size={18} /> },
    // { name: "Paramètres", path: "/seller/parametres", icon: <Settings size={18} /> },
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
