import React from "react";

import { ThemeProvider } from "orobas-utils";

import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import UIExamples from "@/pages/ui-examples";

function App() {
  return (
    <ThemeProvider>
      <div className="relative flex min-h-screen flex-col bg-background">
        <Navbar />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="w-full pt-16"></main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
