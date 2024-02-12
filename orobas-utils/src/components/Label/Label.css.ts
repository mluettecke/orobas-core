import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const labelVariants = recipe({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

export type LabelVariants = RecipeVariants<typeof labelVariants>;
