import React from "react";

import { Alert, AlertDescription, AlertTitle, Icon } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function Alerts() {
  console.log("render Alert");
  return (
    <div className="px-4">
      <PageTitle
        title="Alert"
        subtitle="Displays a callout for user attention."
      />
      <div className="flex min-h-[350px] w-full items-center justify-center p-10">
        <Alert>
          <Icon name="lucide:terminal-square" className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
