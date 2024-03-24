import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  useTheme,
} from "orobas-utils";

export function ThemePicker() {
  const { themes, setTheme, currentTheme } = useTheme();
  console.log("themes", themes);
  console.log("currentTheme", currentTheme);
  return (
    <Select
      value={currentTheme.name}
      onValueChange={(value) => {
        const theme = themes.find((theme) => theme.name === value);
        if (theme) {
          setTheme(theme);
        }
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>
          {themes.map((theme) => {
            return <SelectItem value={theme.name}>{theme.name}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
