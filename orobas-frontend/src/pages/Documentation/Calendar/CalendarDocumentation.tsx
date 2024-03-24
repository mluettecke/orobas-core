import React from "react";

import { Calendar } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function CalendarDocumentation() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <PageTitle
        title="Calendar"
        subtitle="A date field component that allows users to enter and edit date."
      />
      <div className="flex min-h-[350px] w-full items-center justify-center p-10">
        <Calendar
          selected={date}
          mode="single"
          onSelect={setDate}
          className="rounded-md border shadow"
        />
      </div>
    </>
  );
}
