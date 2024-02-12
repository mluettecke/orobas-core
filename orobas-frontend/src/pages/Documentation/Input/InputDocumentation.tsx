import React from "react";

import { Input } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function InputDocumentation() {
  return (
    <>
      <PageTitle
        title="Input"
        subtitle="Displays a form input field or a component that looks like an input field."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Input type="email" placeholder="Email" />
      </div>
    </>
  );
}
