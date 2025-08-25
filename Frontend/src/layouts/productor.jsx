import Sidebar from "../components/sideBar";
import { Wheat, FlaskConical, Wine, Package } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function ProductorLayout() {
  const { user } = useContext(AuthContext);
  const menu = [
    { name: "Ingrédients", path: "/productor/ingredients", icon: <Wheat size={18} /> },
    { name: "Étapes de vinification", path: "/productor/steps", icon: <FlaskConical size={18} /> },
    { name: "Cuvées de vins", path: "/productor/vintage", icon: <Wine size={18} /> },
    { name: "Mise en bouteilles", path: "/productor/bottling", icon: <Package size={18} /> },
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
          <Outlet /> {/* 👈 Ne pas commenter cette ligne ! */}
        </main>
      </div>
    </div>
  );
}
