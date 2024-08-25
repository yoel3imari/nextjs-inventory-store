'use client'

import { Menu } from "lucide-react";
import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div>
      {/* top */}
      <div>
        <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
          <div className="">logo</div>
          <h1 className="font-extrabold text-2xl">INVENTORY</h1>
        </div>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* links */}
      <div className="flex-grow mt-8">
        {/*  */}
      </div>

      {/* footer */}
      <div>
        <p className="text-xs text-center text-gray-500">2024&copy;INVENTORY</p>
      </div>
    </div>
  );
}

export default Sidebar;
