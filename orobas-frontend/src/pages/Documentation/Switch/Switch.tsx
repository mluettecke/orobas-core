import React from "react";

import { Label, Switch } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function SwitchDocumentation() {
  return (
    <>
      <PageTitle
        title="Switch"
        subtitle="A control that allows the user to toggle between checked and not checked."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>
    </>
  );
}
