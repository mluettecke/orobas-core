import React from "react";

import { ThemeProvider } from "orobas-utils";

import Navbar from "@/components/Navbar";
import UIExamples from "@/pages/ui-examples";

function App() {
  return (
    <ThemeProvider>
      <div className="relative flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <div className="border-b">
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"></div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
