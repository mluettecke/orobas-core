import React from "react";

import { Calendar } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function CalendarDocumentation() {
  return (
    <>
      <PageTitle
        title="Calendar"
        subtitle="A date field component that allows users to enter and edit date."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Calendar className="rounded-md border shadow" />
      </div>
    </>
  );
}
