import React from "react";

import { Button } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function Buttons() {
  console.log("Buttons");
  return (
    <>
      <PageTitle
        title="Button"
        subtitle="Displays a button or a component that looks like a button."
      />
      <div className="grid grid-rows-6">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </>
  );
}
