import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const toastVariants = recipe({
  base: "bg-foreground group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  variants: {
    variant: {
      default: "border foreground text-text-primary",
      danger: "danger group border-danger bg-danger text-danger-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ToastVariants = RecipeVariants<typeof toastVariants>;
