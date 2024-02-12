import React from "react";

import { Label, RadioGroup, RadioGroupItem } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function RadioGroupDocumentation() {
  return (
    <>
      <PageTitle
        title="Radio Group"
        subtitle="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </>
  );
}
