import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";

import { cn } from "@/utils";

type IconProps = {
  name: string;
  className?: string;
};

export function Icon(props: IconProps) {
  return <IconifyIcon icon={props.name} className={cn(props.className)} />;
}
