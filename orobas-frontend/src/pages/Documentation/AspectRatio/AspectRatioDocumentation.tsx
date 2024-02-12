import React from "react";

import { AspectRatio } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function AspectRatioDocumentation() {
  return (
    <>
      <PageTitle
        title="Aspect Ratio"
        subtitle="Displays content within a desired ratio."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </>
  );
}
