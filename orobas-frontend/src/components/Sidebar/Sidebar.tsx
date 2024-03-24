import React from "react";
import {
  MatchRoute,
  Outlet,
  RouteMatch,
  useMatches,
  useRouterState,
} from "@tanstack/react-router";

import { ScrollArea } from "orobas-utils";

import { documentationRoute } from "@/pages/Documentation";
import { indexRoute } from "@/routes";

import { CoreSidebar } from "./CoreSidebar";
import { DocumentationSidebar } from "./DocumentationSidebar";

function getSidebar(matches: RouteMatch[]) {
  if (matches.length === 1) {
    return <CoreSidebar />;
  }
  return (
    <>
      <MatchRoute to={indexRoute.to} fuzzy>
        <CoreSidebar />
      </MatchRoute>
      <MatchRoute to={documentationRoute.to} fuzzy>
        <DocumentationSidebar />
      </MatchRoute>
    </>
  );
}

export function Sidebar() {
  const matches = useMatches();

  return (
    <nav className="h-screen w-72 border-r bg-foreground pt-14 md:block">
      <div className="h-[calc(100vh-3.5rem)] space-y-4 py-2">
        <ScrollArea className="h-full px-3 py-2">
          {matches ? getSidebar(matches) : null}
        </ScrollArea>
      </div>
    </nav>
  );
}
