import {
  PanelLeftOpen,
  PanelLeftClose,
  MoreVertical,
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import "../App.css";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();
export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full w-min flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/325.svg"
            alt=""
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <PanelLeftClose /> : <PanelLeftOpen />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Gabriel Sanches</h4>
              <span className="text-xs text-gray-600">
                gabrielsanches@gmail.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 
            bg-indigo-100 text-indigo-800 text-sm 
            invisible opacity-20 -translate-x-3 transition-all 
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export function Items() {
  return (
    <div>
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        alert
      />
      <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" alert />
      <SidebarItem icon={<UserCircle size={20} />} text="Users" alert />
      <SidebarItem icon={<Boxes size={20} />} text="Inventory" alert />
      <SidebarItem icon={<Package size={20} />} text="Orders" alert />
      <SidebarItem icon={<Receipt size={20} />} text="Billings" alert />
      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" alert />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" alert />
    </div>
  );
}
