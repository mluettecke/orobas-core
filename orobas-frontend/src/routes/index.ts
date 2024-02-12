import { RootRoute, Route, Router } from "@tanstack/react-router";

import App from "@/app";
import { documentationRoute } from "@/pages/Documentation";
import { Buttons } from "@/pages/Documentation/Buttons/Buttons";
import Index from "@/pages/Index";

export const rootRoute = new RootRoute({
  component: App,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const routeTree = rootRoute.addChildren([indexRoute, documentationRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
