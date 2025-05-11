import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-60 h-screen bg-red-900 text-white p-6 relative">
      <div className="text-xl font-bold mb-8 flex items-center">
        <span className="mr-2 text-2xl">🍷</span>
        <span>Soadivay</span>
      </div>

      <div className="space-y-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center p-3 rounded font-medium cursor-pointer ${
                isActive
                  ? "bg-white bg-opacity-20"
                  : "hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <div className="mr-3">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 flex items-center">
        <div className="w-10 h-10 rounded-full bg-red-950 flex items-center justify-center font-bold mr-3">
          V
        </div>
        <div>
          <div>Jean Dupont</div>
          <div className="text-xs opacity-80">Vendeur</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
