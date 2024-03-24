import React from "react";

import { Button } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function Buttons() {
  return (
    <>
      <PageTitle
        title="Button"
        subtitle="Displays a button or a component that looks like a button."
      />
      <div className="flex min-h-[350px] w-full items-center justify-center p-10">
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
