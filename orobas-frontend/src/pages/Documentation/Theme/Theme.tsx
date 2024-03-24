import React from "react";

import { Card, useTheme } from "orobas-utils";

import { PageTitle } from "../PageTitle";
import { PaletteColorBlock } from "./PaletteColorBlock";

export function ThemeOverview() {
  const { currentTheme, themeMode } = useTheme();

  const theme = currentTheme[themeMode];

  return (
    <div>
      <PageTitle title="Theme" subtitle="Theme variables overview" />
      <div className="flex w-full items-center p-5">
        <Card className="w-full p-5">
          <h2 className="mb-2 text-2xl font-bold">
            Foreground and Background Colors
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <PaletteColorBlock
              title="palette.background.default"
              color={theme.palette.background.default}
            />
            <PaletteColorBlock
              title="palette.background.hover"
              color={theme.palette.background.hover}
            />
            <PaletteColorBlock
              title="palette.foreground.default"
              color={theme.palette.foreground.default}
            />
            <PaletteColorBlock
              title="palette.foreground.hover"
              color={theme.palette.foreground.hover}
            />
          </div>
          <h2 className="mb-2 mt-4 text-2xl font-bold">
            Primary and Secondary Colors
          </h2>
          <h3 className="mb-2 mt-4 text-lg font-bold">Primary</h3>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <PaletteColorBlock
              title="palette.primary.main"
              color={theme.palette.primary.main}
            />
            <PaletteColorBlock
              title="palette.primary.contrastText"
              color={theme.palette.primary.contrastText}
            />
            <PaletteColorBlock
              title="palette.primary.light"
              color={theme.palette.primary.light}
            />
            <PaletteColorBlock
              title="palette.primary.dark"
              color={theme.palette.primary.dark}
            />
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold">Secondary</h3>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <PaletteColorBlock
              title="palette.secondary.main"
              color={theme.palette.secondary.main}
            />
            <PaletteColorBlock
              title="palette.secondary.contrastText"
              color={theme.palette.secondary.contrastText}
            />
            <PaletteColorBlock
              title="palette.secondary.light"
              color={theme.palette.secondary.light}
            />
            <PaletteColorBlock
              title="palette.secondary.dark"
              color={theme.palette.secondary.dark}
            />
          </div>
          <h2 className="mb-2 mt-4 text-2xl font-bold">Indicator Colors</h2>
          <h3 className="mb-2 mt-4 text-lg font-bold">Success</h3>
          <div className="grid grid-cols-2 gap-4">
            <PaletteColorBlock
              title="palette.success.main"
              color={theme.palette.success.main}
            />
            <PaletteColorBlock
              title="palette.success.contrastText"
              color={theme.palette.success.contrastText}
            />
            <PaletteColorBlock
              title="palette.success.light"
              color={theme.palette.success.light}
            />
            <PaletteColorBlock
              title="palette.success.dark"
              color={theme.palette.success.dark}
            />
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold">Info</h3>
          <div className="grid grid-cols-2 gap-4">
            <PaletteColorBlock
              title="palette.info.main"
              color={theme.palette.info.main}
            />
            <PaletteColorBlock
              title="palette.info.contrastText"
              color={theme.palette.info.contrastText}
            />
            <PaletteColorBlock
              title="palette.info.light"
              color={theme.palette.info.light}
            />
            <PaletteColorBlock
              title="palette.info.dark"
              color={theme.palette.info.dark}
            />
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold">Warning</h3>
          <div className="grid grid-cols-2 gap-4">
            <PaletteColorBlock
              title="palette.warning.main"
              color={theme.palette.warning.main}
            />
            <PaletteColorBlock
              title="palette.warning.contrastText"
              color={theme.palette.warning.contrastText}
            />
            <PaletteColorBlock
              title="palette.warning.light"
              color={theme.palette.warning.light}
            />
            <PaletteColorBlock
              title="palette.warning.dark"
              color={theme.palette.warning.dark}
            />
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold">Error</h3>
          <div className="grid grid-cols-2 gap-4">
            <PaletteColorBlock
              title="palette.error.main"
              color={theme.palette.error.main}
            />
            <PaletteColorBlock
              title="palette.error.contrastText"
              color={theme.palette.error.contrastText}
            />
            <PaletteColorBlock
              title="palette.error.light"
              color={theme.palette.error.light}
            />
            <PaletteColorBlock
              title="palette.error.dark"
              color={theme.palette.error.dark}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
