import React from "react";

import { DatePicker } from "orobas-utils";

import { PageTitle } from "../PageTitle";

function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return <DatePicker value={date} onChange={(value) => setDate(value)} />;
}

export function DatePickerDocumentation() {
  return (
    <>
      <PageTitle
        title="Toggle"
        subtitle="A two-state button that can be either on or off."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <DatePickerDemo />
      </div>
    </>
  );
}
