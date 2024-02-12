import React from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Icon,
} from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function HoverCardDocumentation() {
  return (
    <>
      <PageTitle
        title="Context Menu"
        subtitle="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <Icon
                    name="radix-icons:calendar"
                    className="mr-2 h-4 w-4 opacity-70"
                  />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
}
