import React, { Children, ReactNode, useEffect, useState } from "react";
import { useMatch, useMatchRoute } from "@tanstack/react-router";

import { Button, Collapsible, Icon } from "orobas-utils";

import { documentationRoute } from "@/pages/Documentation";

type SidebarItemGroup = {
  label: string;
  children: ReactNode;
};

export function SidebarItemGroup(props: SidebarItemGroup) {
  const { label, children } = props;
  const [open, setOpen] = useState(false);

  const matchRoute = useMatchRoute();
  const params = matchRoute({ to: documentationRoute.to, fuzzy: true });

  useEffect(() => {
    if (params) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <div
        className="transparent hover:text-accent-foreground group flex
          items-center rounded-md px-3 py-2 text-sm font-medium animate-out
          hover:bg-foreground-hover"
      >
        <div className="group flex w-full items-center justify-between">
          <span>{label}</span>
          <Button
            size="sm"
            variant="ghost"
            className="h-6 px-1 hover:bg-background-hover"
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
