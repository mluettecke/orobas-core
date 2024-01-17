import React from "react";

import { ThemeProvider } from "orobas-utils";

import UIExamples from "@/pages/ui-examples";

function App() {
  return (
    <ThemeProvider>
      <div>
        <UIExamples />
      </div>
    </ThemeProvider>
  );
}

export default App;
