import React from "react";
import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
  useRouterState,
} from "@tanstack/react-router";

import { indexRoute } from "@/routes";

import { SidebarItem } from "./SidebarItem";

type SidebarProps = {};

const rootRoute = new RootRoute({
  component: SidebarOutlet,
});

const coreSidebarRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CoreSidebar,
});

const wildcardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: CoreSidebar,
});

const documentationSidebarRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/documentation",

  component: DocumentationSidebar,
});

const sidebarTree = rootRoute.addChildren([
  coreSidebarRoute,
  documentationSidebarRoute,
  wildcardRoute,
]);

function SidebarOutlet(props: SidebarProps) {
  return (
    <nav className="relative hidden h-screen border-r pt-14 md:block w-72">
      <div className="space-y-4 py-2">
        <div className="px-3 py-2">
          {/*<Outlet />*/}
          <DocumentationSidebar />
        </div>
      </div>
    </nav>
  );
}

function CoreSidebar() {
  console.log("CoreSidebar");
  return (
    <>
      <SidebarItem
        icon="radix-icons:blending-mode"
        label={"Test"}
        to={"/test"}
      />
    </>
  );
}

function DocumentationSidebar() {
  console.log("DocumentationSidebar");
  return (
    <>
      <SidebarItem
        icon="radix-icons:blending-mode"
        label={"Overview"}
        to={"/documentation"}
      />
      <SidebarItem
        icon="radix-icons:blending-mode"
        label={"Button"}
        to={"/documentation/button"}
      />
    </>
  );
}

const router = new Router({
  routeTree: sidebarTree,
});

export function Sidebar() {
  return <SidebarOutlet />;
  return <RouterProvider router={router} />;
}
