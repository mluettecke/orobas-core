import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonVariants = recipe({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-contrast shadow hover:bg-primary/90",
      destructive: "bg-error text-error-contrast shadow-sm hover:bg-error/90",
      outline:
        "bg-foreground border border-input shadow-sm hover:bg-foreground-hover hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-contrast shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-background-hover hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonVariants>;
