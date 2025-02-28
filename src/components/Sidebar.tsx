import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import menuItems from "../config/menuItems";

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer relative group ${
        active
          ? "text-gray-800 font-medium"
          : "text-gray-500 hover:text-gray-800"
      }`}
      onClick={onClick}
    >
      {active && (
        <div className="absolute -left-4 inset-y-0 w-1 bg-gray-800 rounded-r"></div>
      )}
      {!active && (
        <div className="absolute -left-4 inset-y-0 w-1 bg-gray-800 rounded-r opacity-0 group-hover:opacity-70"></div>
      )}
      <img
        src={`/assets/svg/${icon}.svg`}
        alt={label}
        width={24}
        height={24}
        className={`mr-3 ${
          active
            ? "brightness-0"
            : "brightness-0 opacity-60 group-hover:opacity-100"
        }`}
      />
      {/* <div className="mr-3">{icon}</div> */}
      <span className="font-medium">{label}</span>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden md:flex flex-col w-[250px] h-screen border-r border-gray-200 bg-white">
      <div className="flex items-center p-5">
        <div className="text-white p-2 rounded mr-3">
          <img src="/assets/svg/task.svg" alt="Logo" width={24} height={24} />
        </div>
        <h1 className="text-xl font-bold text-primary">Soar Task</h1>
      </div>

      <div className="flex-1 overflow-y-auto pl-4 pr-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            active={isActive(item.path)}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
