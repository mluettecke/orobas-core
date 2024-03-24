import React from "react";

import { SheetContent, SheetHeader, SheetTitle, useTheme } from "orobas-utils";

import { ThemePicker } from "./ThemePicker";

export function SettingsDrawer() {
  const { themes, currentTheme, setTheme } = useTheme();
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Settings</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <ThemePicker />
      </div>
    </SheetContent>
  );
}
