import React from "react";

import {
  Button,
  Icon,
  Sheet,
  SheetContent,
  SheetTrigger,
  useTheme,
} from "orobas-utils";

import { SettingsDrawer } from "../TempSettings/SettingsDrawer";

type DarkModeSwitchProps = {};

export function DarkModeSwitch(props: DarkModeSwitchProps) {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <Button
      onClick={toggleThemeMode}
      variant="ghost"
      className="hover:bg-components-navbar-hover relative h-8 w-8"
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
