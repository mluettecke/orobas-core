import React from "react";

import { Separator } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function SeparatorDocumentation() {
  return (
    <>
      <PageTitle
        title="Separator"
        subtitle="Visually or semantically separates content."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </div>
    </>
  );
}
