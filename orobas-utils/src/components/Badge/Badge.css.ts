import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const badgeVariants = recipe({
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-contrast hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-contrast hover:bg-secondary/80",
      destructive:
        "border-transparent bg-error text-error-contrast hover:bg-error-light",
      outline: "text-text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeVariants = RecipeVariants<typeof badgeVariants>;
