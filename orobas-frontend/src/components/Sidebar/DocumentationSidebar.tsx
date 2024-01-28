import React from "react";

import { buttonsRoute } from "@/routes";

import { SidebarItem } from "./SidebarItem";

export function DocumentationSidebar() {
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
        to={buttonsRoute.to}
      />
    </>
  );
}
