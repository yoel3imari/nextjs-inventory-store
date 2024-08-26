"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Icon, LayoutDashboardIcon, LucideIcon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start py-4 px-8"
        } hover:text-blue-400 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "text-white bg-blue-300" : "" }`}
      >
        <Icon className="w-6 h-6 text-gray-700" />
        <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  );
};

function Sidebar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* top */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-4" : "px-8"
        }`}
      >
        <div className="">logo</div>
        <h1
          className={`font-extrabold text-2xl ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          INVENTORY
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* links */}
      <div className="flex-grow mt-8">

            <SidebarLink href="/dashboard" label="Dashboard" icon={LayoutDashboardIcon} isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/dashboard1" label="Dashboard" icon={LayoutDashboardIcon} isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/dashboard2" label="Dashboard" icon={LayoutDashboardIcon} isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/dashboard3" label="Dashboard" icon={LayoutDashboardIcon} isCollapsed={isSidebarCollapsed} />
            <SidebarLink href="/dashboard4" label="Dashboard" icon={LayoutDashboardIcon} isCollapsed={isSidebarCollapsed} />

      </div>

      {/* footer */}
      <div>
        <p className={`text-xs text-center text-gray-500 py-4 ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}>2024&copy;INVENTORY</p>
      </div>
    </div>
  );
}

export default Sidebar;
