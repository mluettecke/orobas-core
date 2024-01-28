import React from "react";

import { Button, Icon, useTheme } from "orobas-utils";

type DarkModeSwitchProps = {};

export function DarkModeSwitch(props: DarkModeSwitchProps) {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <Button
      onClick={toggleThemeMode}
      variant="ghost"
      className="relative h-8 w-8 "
      size="icon"
    >
      {themeMode === "dark" ? (
        <Icon name="radix-icons:moon" />
      ) : (
        <Icon name="radix-icons:sun" />
      )}
    </Button>
  );
}
