import React from "react";

import { SidebarItem } from "./SidebarItem";

type SidebarProps = {};

export function Sidebar(props: SidebarProps) {
  return (
    <nav className="relative hidden h-screen border-r pt-16 md:block w-72">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <SidebarItem icon="radix-icons:blending-mode" label={"Pyramid"} />
        </div>
      </div>
    </nav>
  );
}
