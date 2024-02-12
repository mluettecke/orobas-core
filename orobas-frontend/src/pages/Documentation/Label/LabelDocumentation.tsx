import React from "react";

import { Checkbox, Label } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function LabelDocumentation() {
  return (
    <>
      <PageTitle
        title="Context Menu"
        subtitle="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>
    </>
  );
}
