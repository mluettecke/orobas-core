import React from "react";
import { Link } from "@tanstack/react-router";

import { Icon } from "orobas-utils";

import { indexRoute } from "@/routes";

import DarkModeSwitch from "../DarkModeSwitch";
import TempSettings from "../TempSettings";
import UserDropdown from "../UserDropdown";

type NavbarProps = {};

function Navbar(props: NavbarProps) {
  return (
    <header
      className="text-components-navbar-text bg-components-navbar-background
        supports-backdrop-blur:bg-background/60 bg-ui-na fixed left-0 right-0
        top-0 z-20 border-b backdrop-blur"
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 md:flex">
          <Link to={indexRoute.to}>
            <div className="mr-6 flex items-center space-x-2">
              <Icon size="24" name="radix-icons:eye-open" />
              <span className="font-bold sm:inline-block">Orobas</span>
            </div>
          </Link>
        </div>
        <div
          className="flex flex-1 items-center justify-between space-x-2
            md:justify-end"
        >
          <div className="flex items-center"></div>
        </div>
        <div className="flex items-center gap-2">
          <UserDropdown />
          <DarkModeSwitch />
          <TempSettings />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
