import React, { useState } from "react";

import { Button, Icon, Sheet, SheetOverlay, SheetTrigger } from "orobas-utils";

import { SettingsDrawer } from "./SettingsDrawer";

export function TempSettings() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-components-navbar-hover relative h-8 w-8"
          size="icon"
        >
          <Icon name="radix-icons:gear" />
        </Button>
      </SheetTrigger>
      <SettingsDrawer />
    </Sheet>
  );
}
