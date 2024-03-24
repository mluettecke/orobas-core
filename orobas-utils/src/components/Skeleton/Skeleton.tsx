import React from "react";

import { cn } from "@/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-background-hover", className)}
      {...props}
    />
  );
}

export { Skeleton };
