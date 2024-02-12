import React from "react";

import { Skeleton } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function SkeletonDocumentation() {
  return (
    <>
      <PageTitle
        title="Skeleton"
        subtitle="A two-state button that can be either on or off."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center flex-col space-y-10">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </>
  );
}
