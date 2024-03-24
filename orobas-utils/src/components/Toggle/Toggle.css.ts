import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const toggleVariants = recipe({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-background-hover hover:text-text-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background-hover data-[state=on]:text-text-primary",
  variants: {
    variant: {
      default: "bg-transparent",
      outline:
        "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 px-3",
      sm: "h-8 px-2",
      lg: "h-10 px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ToggleVariants = RecipeVariants<typeof toggleVariants>;
