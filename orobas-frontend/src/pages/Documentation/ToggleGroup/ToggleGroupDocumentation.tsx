import React from "react";

import { Icon, Toggle, ToggleGroup, ToggleGroupItem } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function ToggleGroupDocumentation() {
  return (
    <>
      <PageTitle
        title="Toggle Group"
        subtitle="A set of two-state buttons that can be toggled on or off."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Icon name="radix-icons:font-bold" className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Icon name="radix-icons:font-italic" className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <Icon name="radix-icons:underline" className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </>
  );
}
