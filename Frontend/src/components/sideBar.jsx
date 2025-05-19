import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ChevronRight, User } from "lucide-react";
import ConfirmDeleteModal from "./confirmDeleteModal";
import { AuthContext } from "../context/authContext";

const Sidebar = ({ menuItems, user }) => {


  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const hasActiveSubmenu = (submenu) =>
    submenu?.some((sub) => location.pathname === sub.path);

  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (item.submenu && hasActiveSubmenu(item.submenu)) {
        setOpenSubmenu(index);
      }
    });
  }, [location.pathname]);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleLogout = () => {
    window.location.href = "/";
    logout();
  }

  return (
    <>
    <ConfirmDeleteModal isOpen={isOpen} isForLoOut={true} onClose={()=>setIsOpen(false)} onConfirm={handleLogout} message="Êtes-vous sûr de vouloir vous déconnecter ?"/>

    <div className="w-60 h-screen bg-red-900 text-white p-6 relative overflow-y-auto">
      <div className="text-xl font-bold mb-8 flex items-center">
        <span className="mr-2 text-2xl">🍷</span>
        <span>Soadivay</span>
      </div>

      <div className="space-y-1">
        {menuItems.map((item, index) => {
          const active = isActive(item.path);
          const activeSub = hasActiveSubmenu(item.submenu);

          return (
            <div key={index} className="mb-1.5">
              <div
                onClick={() =>
                  item.submenu ? toggleSubmenu(index) : navigate(item.path)
                }
                className={`flex items-center justify-between p-3 rounded font-medium cursor-pointer transition-all ${
                  active || activeSub
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-3">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
                {item.submenu && (
                  <ChevronRight
                    className={`transition-transform ${
                      openSubmenu === index ? "rotate-90" : ""
                    }`}
                    size={18}
                  />
                )}
              </div>

              {item.submenu && (
                <div
                  className={`transition-all overflow-hidden ml-5 mt-1 space-y-1 text-sm ${
                    openSubmenu === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => {
                    const subActive = isActive(subItem.path);
                    return (
                      <div
                        key={subIndex}
                        onClick={() => navigate(subItem.path)}
                        className={`flex items-center p-2 pl-3 rounded cursor-pointer ${
                          subActive
                            ? "bg-white bg-opacity-20"
                            : "hover:bg-white hover:bg-opacity-10"
                        }`}
                      >
                        <div className="mr-2">{subItem.icon}</div>
                        <span>{subItem.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-20 flex items-center">
        <div className="w-10 h-10 rounded-full bg-red-950 flex items-center justify-center font-bold mr-3">
          <User />
        </div>
        <div>
          <div className="font-bold">{user?.role}</div>
          <div className="text-xs">{user?.name} {user?.lastName}</div>
        </div>
      </div>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="absolute bottom-6 left-1/2 right-1/2 -translate-x-1/2 p-3 w-52 rounded bg-red-950 flex items-center justify-center hover:gap-1 transition-all space-x-2"
      >
        <ArrowLeft size={20} />
        <span>Déconnexion</span>
      </button>
    </div>
    </>
  );
};

export default Sidebar;
