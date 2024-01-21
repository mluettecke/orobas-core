import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";

type IconProps = {
  name: string;
};

export function Icon(props: IconProps) {
  return <IconifyIcon icon={props.name} />;
}
