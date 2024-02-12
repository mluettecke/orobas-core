import React from "react";
import { Link } from "@tanstack/react-router";

import { Icon } from "orobas-utils";

import { indexRoute } from "@/routes";

import DarkModeSwitch from "../DarkModeSwitch";
import UserDropdown from "../UserDropdown";

type NavbarProps = {};

function Navbar(props: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 md:flex">
          <Link to={indexRoute.to}>
            <div className="mr-6 flex items-center space-x-2">
              <Icon size="24" name="radix-icons:eye-open" />
              <span className="font-bold sm:inline-block">Orobas</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center"></div>
        </div>
        <div className="flex items-center gap-2">
          <UserDropdown />
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
