import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, Bell, Settings } from "lucide-react";
import menuItems from "../config/menuItems";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [animationClass, setAnimationClass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      // When opening, immediately show the menu with the starting position
      setAnimationClass("translate-x-0");
      // Prevent body scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // When closing, first animate out, then we'll handle hiding in the return check
      setAnimationClass("-translate-x-full");
      // Re-enable body scrolling when menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure body scrolling is re-enabled
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // If menu is closed and animation has completed, don't render anything
  if (!isOpen && animationClass === "-translate-x-full") return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay with fade effect */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Full screen menu with slide effect */}
      <div
        className={`fixed inset-y-0 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out ${animationClass}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="bg-gray-800 text-white p-2 rounded mr-3">
                <img
                  src="/assets/svg/task.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </div>
              <h1 className="text-xl font-bold text-primary">Soar Task</h1>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {menuItems.map((item) => (
                <div
                  key={item.path}
                  className={`flex items-center p-4 my-2 rounded-xl ${
                    isActive(item.path)
                      ? "bg-gray-800 text-white"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  <img
                    src={`/assets/svg/${item.icon}.svg`}
                    alt={item.label}
                    width={22}
                    height={22}
                    className={`mr-4 ${
                      isActive(item.path)
                        ? "brightness-0 invert"
                        : "brightness-0 opacity-60"
                    }`}
                  />
                  <span className="font-medium text-lg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
              <div className="ml-3">
                <p className="font-medium text-gray-800">Olivia Rhye</p>
                <p className="text-sm text-gray-500">olivia@example.com</p>
              </div>
              <div className="ml-auto flex space-x-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Bell className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  onClick={() => handleNavigation("/settings")}
                >
                  <Settings className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
