import React from "react";
import { Link } from "@tanstack/react-router";

import { cn, Icon } from "orobas-utils";

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
      className={cn(
        `transparent group flex items-center rounded-md px-3 py-2 text-sm
        font-medium hover:bg-foreground-hover`,
        className,
      )}
      activeProps={{
        className:
          "text-primary bg-primary-light/30 hover:!bg-primary-light/30",
      }}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </Link>
  );
}
