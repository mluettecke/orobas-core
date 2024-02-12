import React from "react";

import { Button, toast } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function SonnerDocumentation() {
  return (
    <>
      <PageTitle
        title="Sonner"
        subtitle="An opinionated toast component for React."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center flex-col space-y-10">
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
      </div>
    </>
  );
}
