import React from "react";

import { Button, ToastAction, useToast } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function ToastDocumentation() {
  const { toast } = useToast();

  return (
    <>
      <PageTitle
        title="Card"
        subtitle="Displays a card with header, content, and footer."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          Add to calendar
        </Button>
      </div>
    </>
  );
}
