import React from "react";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import menuItems from "../config/menuItems";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Find the current menu item based on the location
  const currentMenuItem =
    menuItems.find((item) => item.path === location.pathname) || menuItems[0];
  const title = currentMenuItem.title;

  return (
    <div className="flex items-center justify-between p-4 px-8 bg-white md:border-b md:border-gray-200">
      {/* Mobile view with centered title */}
      <div className="md:hidden flex items-center justify-between w-full">
        <div className="flex-1">
          <button className="text-gray-800" onClick={onMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-xl font-semibold text-primary">{title}</h1>
        </div>

        <div className="flex-1 flex justify-end">
          <img
            className="h-10 w-10 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
          />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex items-center md:flex-1">
        <h1 className="text-xl font-semibold text-primary">{title}</h1>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <div className="relative hidden md:block flex-1">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-blueGray" />
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="block w-[255px] placeholder:text-blueGray pl-12 py-3 border-none rounded-full bg-cloud focus:outline-none z-50"
          />
        </div>
        <button
          className="p-2 rounded-full bg-cloud hover:bg-gray-200 cursor-pointer z-50"
          onClick={() => navigate("/settings")}
        >
          <img
            src="/assets/svg/gear.svg"
            alt="Settings"
            width={24}
            height={24}
          />
        </button>
        <button className="p-2 rounded-full bg-cloud hover:bg-gray-200 z-50">
          <img
            src="/assets/svg/bell.svg"
            alt="Notifications"
            width={24}
            height={24}
          />
        </button>
        <img
          className="h-10 w-10 rounded-full border-2 border-white"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User avatar"
        />
      </div>
    </div>
  );
};

export default Header;
