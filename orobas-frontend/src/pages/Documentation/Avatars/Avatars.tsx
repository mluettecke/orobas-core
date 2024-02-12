import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function Avatars() {
  return (
    <div className="px-4">
      <PageTitle
        title="Avatar"
        subtitle="An image element with a fallback for representing the user."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
