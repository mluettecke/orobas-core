import React from "react";

import { Icon } from "orobas-utils";

type NavbarProps = {};

function Navbar(props: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <div className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Orobas</span>
            <Icon name={"rxCaretSort"} />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
