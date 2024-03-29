import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../utils";
import { buttonVariants, ButtonVariants } from "./Button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, ButtonProps, buttonVariants };
