import React, { Children, ReactNode, useState } from "react";

import { Button, Collapsible, Icon } from "orobas-utils";

type SidebarItemGroup = {
  label: string;
  children: ReactNode;
};

export function SidebarItemGroup(props: SidebarItemGroup) {
  const { label, children } = props;
  const [open, setOpen] = useState(false);
  console.log("open", open);
  return (
    <>
      <div className="animate-out group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent">
        <div className="w-full group flex items-center justify-between">
          <span>{label}</span>
          <Button
            size="sm"
            variant="ghost"
            className="px-1 h-6 hover:bg-gray-200"
            onClick={() => setOpen(!open)}
          >
            <Icon
              name={
                open ? "radix-icons:chevron-up" : "radix-icons:chevron-down"
              }
            />
          </Button>
        </div>
      </div>
      {open ? <>{children}</> : null}
    </>
  );
}
