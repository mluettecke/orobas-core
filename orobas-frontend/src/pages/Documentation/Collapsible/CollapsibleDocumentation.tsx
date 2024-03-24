import React from "react";

import {
  Button,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Icon,
} from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function CollapsibleDocumentation() {
  return (
    <>
      <PageTitle
        title="Checkbox"
        subtitle="A control that allows the user to toggle between checked and not checked."
      />
      <div className="flex min-h-[350px] w-full items-center justify-center p-10">
        <Collapsible className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <Icon name="radix-icons:caret-sort" className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div
            className="rounded-md border bg-foreground px-4 py-2 font-mono
              text-sm shadow-sm"
          >
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div
              className="rounded-md border bg-foreground px-4 py-2 font-mono
                text-sm shadow-sm"
            >
              @radix-ui/colors
            </div>
            <div
              className="rounded-md border bg-foreground px-4 py-2 font-mono
                text-sm shadow-sm"
            >
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
}
