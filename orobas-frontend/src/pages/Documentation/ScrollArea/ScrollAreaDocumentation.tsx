import React from "react";

import { ScrollArea, Separator } from "orobas-utils";

import { PageTitle } from "../PageTitle";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function ScrollAreaDocumentation() {
  return (
    <>
      <PageTitle
        title="Scroll Area"
        subtitle="Augments native scroll functionality for custom, cross-browser styling."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
