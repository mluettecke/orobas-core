import React from "react";

import { Badge } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function Badges() {
  return (
    <div className="px-4">
      <PageTitle
        title="Badges"
        subtitle="Displays a badge or a component that looks like a badge."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Badge>Default Badge</Badge>
        <Badge variant="outline">Outline Badge</Badge>
        <Badge variant="secondary">Secondary Badge</Badge>
        <Badge variant="destructive">Destructive Badge</Badge>
      </div>
    </div>
  );
}
