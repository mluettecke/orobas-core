import React from "react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import {
  ScrollArea,
  Sonner,
  ThemeProvider,
  Toaster,
  ToastProvider,
  ToastViewport,
  TooltipProvider,
} from "orobas-utils";

import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="relative flex min-h-screen flex-col bg-background">
          <Navbar />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <ScrollArea className="w-full">
              <main className="w-full pt-14">
                <Outlet />
              </main>
            </ScrollArea>
          </div>
        </div>

        <Toaster />
        <Sonner />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
