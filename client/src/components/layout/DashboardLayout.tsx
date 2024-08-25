import React from "react";
import Navbar from '@/components/ui/Navbar';
import Sidebar from "@/components/ui/Sidebar";

type Props = {};

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24 transition-all`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
