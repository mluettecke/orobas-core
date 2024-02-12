import React from "react";

import { Icon, Toggle } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function ToggleDocumentation() {
  return (
    <>
      <PageTitle
        title="Date Picker"
        subtitle="A date picker component with range and presets."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Toggle aria-label="Toggle italic">
          <Icon name="radix-icons:font-bold" className="h-4 w-4" />
        </Toggle>
      </div>
    </>
  );
}
