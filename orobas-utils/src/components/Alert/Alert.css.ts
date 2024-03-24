import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const alertVariants = recipe({
  base: "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-text-primary",
  variants: {
    variant: {
      default: "bg-foreground text-text-primary",
      danger:
        "border-danger/50 text-danger dark:border-danger [&>svg]:text-danger",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type AlertVariants = RecipeVariants<typeof alertVariants>;
