import React from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";

import { CoreSidebar } from "./CoreSidebar";
import { DocumentationSidebar } from "./DocumentationSidebar";
import { SidebarItem } from "./SidebarItem";

function getSidebar(pathname: string) {
  if (pathname.startsWith("/documentation")) {
    return <DocumentationSidebar />;
  }

  return <CoreSidebar />;
}

export function Sidebar() {
  const { location } = useRouterState();

  return (
    <nav className="relative hidden h-screen border-r pt-14 md:block w-72">
      <div className="space-y-4 py-2">
        <div className="px-3 py-2">{getSidebar(location.pathname)}</div>
      </div>
    </nav>
  );
}
