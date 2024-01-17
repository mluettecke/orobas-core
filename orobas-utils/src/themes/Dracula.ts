import { Theme, ThemeVariables } from "@/provider/ThemeProvider";

const DraculaLightTheme: ThemeVariables = {
  background: "231, 15%, 100%",
  foreground: "60, 30%, 10%",
  muted: "232, 14%, 98%",
  mutedForeground: "60, 30%, 20%",
  popover: "231, 15%, 94%",
  popoverForeground: "60, 30%, 20%",
  border: "232, 14%, 31%",
  input: "225, 27%, 51%",
  card: "232, 14%, 98%",
  cardForeground: "60, 30%, 5%",
  primary: "265, 89%, 78%",
  primaryForeground: "60, 30%, 96%",
  secondary: "326, 100%, 74%",
  secondaryForeground: "60, 30%, 96%",
  accent: "225, 27%, 70%",
  accentForeground: "60, 30%, 10%",
  destructive: "0, 100%, 67%",
  destructiveForeground: "60, 30%, 96%",
  ring: "225, 27%, 51%",
  radius: "0.5rem",
};

const DraculaDarkTheme: ThemeVariables = {
  background: "231, 15%, 18%",
  foreground: "60, 30%, 96%",
  muted: "232, 14%, 31%",
  mutedForeground: "60, 30%, 96%",
  popover: "231, 15%, 18%",
  popoverForeground: "60, 30%, 96%",
  border: "232, 14%, 31%",
  input: "225, 27%, 51%",
  card: "232, 14%, 31%",
  cardForeground: "60, 30%, 96%",
  primary: "265, 89%, 78%",
  primaryForeground: "60, 30%, 96%",
  secondary: "326, 100%, 74%",
  secondaryForeground: "60, 30%, 96%",
  accent: "225, 27%, 51%",
  accentForeground: "60, 30%, 96%",
  destructive: "0, 100%, 67%",
  destructiveForeground: "60, 30%, 96%",
  ring: "225, 27%, 51%",
  radius: "0.5rem",
};

export const DraculaTheme: Theme = {
  name: "Dracula",
  light: DraculaLightTheme,
  dark: DraculaDarkTheme,
};
