import React from "react";

import { Button } from "orobas-utils";

import DarkModeSwitcher from "./DarkModeSwitcher";
import ThemeSelect from "./ThemeSelect";
import Typography from "./Typography";
import UIExamplesHeader from "./UiExamplesHeader";

function UIExamples() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <DarkModeSwitcher />
      <ThemeSelect />
      <UIExamplesHeader title="Buttons" subtitle="It just some buttons" />
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div>
          <Button>Default</Button>
        </div>
        <div>
          <Button variant="secondary">Secondary</Button>
        </div>
        <div>
          <Button variant="outline">Outline</Button>
        </div>
        <div>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
      <UIExamplesHeader
        title="Typography"
        subtitle="Styles for headings, paragraphs, lists...etc"
      />
      <div className="mt-5">
        <Typography />
      </div>
    </div>
  );
}

export default UIExamples;
