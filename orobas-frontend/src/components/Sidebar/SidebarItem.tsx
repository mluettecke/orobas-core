import React from "react";

import { Icon } from "orobas-utils";

type SidebarItemProps = {
  icon: string;
  label: string;
};

export function SidebarItem(props: SidebarItemProps) {
  const { icon, label } = props;

  return (
    <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent">
      <Icon name={icon} />
      <span>{label}</span>
    </span>
  );
}
