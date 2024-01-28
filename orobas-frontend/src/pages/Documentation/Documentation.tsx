import React from "react";
import { Outlet } from "@tanstack/react-router";

export function Documentation() {
  return (
    <div className="py-4 px-2">
      <Outlet />
    </div>
  );
}
