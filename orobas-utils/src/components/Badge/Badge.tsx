import React from "react";

import { cn } from "@/utils";

import { BadgeVariants, badgeVariants } from "./Badge.css";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & BadgeVariants;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
