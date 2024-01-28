import React from "react";
import { Link } from "@tanstack/react-router";

import { Icon } from "orobas-utils";

type SidebarItemProps = {
  icon: string;
  label: string;
  to: string;
  className?: string;
};

export function SidebarItem(props: SidebarItemProps) {
  const { icon, label, to, className } = props;
  return (
    <Link
      to={to}
      activeOptions={{
        exact: true,
      }}
      className={
        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent" +
        className
      }
      activeProps={{ className: "bg-accent" }}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </Link>
  );
}
