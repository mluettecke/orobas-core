import React from "react";
import {
  AvatarFallback as AvatarFallbackPrimitive,
  AvatarImage as AvatarPrimitiveImage,
  Root as AvatarPrimitiveRoot,
} from "@radix-ui/react-avatar";

import { cn } from "@/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitiveRoot>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveRoot>
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveRoot
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitiveRoot.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitiveImage>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveImage>
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveImage
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitiveImage.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarFallbackPrimitive>,
  React.ComponentPropsWithoutRef<typeof AvatarFallbackPrimitive>
>(({ className, ...props }, ref) => (
  <AvatarFallbackPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarFallbackPrimitive.displayName;

export { Avatar, AvatarImage, AvatarFallback };
