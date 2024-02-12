import React from "react";

import { Textarea } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function TextareaDocumentation() {
  return (
    <>
      <PageTitle
        title="Textarea"
        subtitle="Displays a form textarea or a component that looks like a textarea."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Textarea placeholder="Type your message here." />
      </div>
    </>
  );
}
