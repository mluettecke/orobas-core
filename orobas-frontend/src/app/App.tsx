import React from "react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { ThemeProvider } from "orobas-utils";

import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

function App() {
  return (
    <ThemeProvider>
      <div className="relative flex min-h-screen flex-col bg-background">
        <Navbar />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="w-full pt-14">
            <Outlet />
          </main>
        </div>
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  );
}

export default App;
