import React from "react";

import { Button, Tooltip, TooltipContent, TooltipTrigger } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function TooltipDocumentation() {
  return (
    <>
      <PageTitle
        title="Tooltip"
        subtitle="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}
