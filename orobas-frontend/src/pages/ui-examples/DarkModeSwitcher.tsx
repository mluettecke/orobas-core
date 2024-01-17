import React from "react";

import { Button, useTheme } from "orobas-utils";

function DarkModeSwitcher() {
  const { themeMode, toggleThemeMode } = useTheme();
  return <Button onClick={toggleThemeMode}>{themeMode}</Button>;
}

export default DarkModeSwitcher;
