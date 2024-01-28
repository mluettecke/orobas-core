import { RootRoute, Route, Router } from "@tanstack/react-router";

import App from "@/app";
import Documentation from "@/pages/Documentation";
import Index from "@/pages/Index";

const rootRoute = new RootRoute({
  component: App,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

export const documentationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/documentation",
  component: Documentation,
});

const routeTree = rootRoute.addChildren([indexRoute, documentationRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
