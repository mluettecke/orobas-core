import React from "react";

import { SidebarItem } from "./SidebarItem";

export function CoreSidebar() {
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
