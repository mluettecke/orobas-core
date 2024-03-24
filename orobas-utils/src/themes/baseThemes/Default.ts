import { Theme, ThemeTokens } from "../types";

export const defaultLightTheme: ThemeTokens = {
  palette: {
    background: {
      default: "216 38% 97%",
      alternative: "0 0% 83%", // Fix
      hover: "0 0% 90%", // Fix
    },
    foreground: {
      default: "0 0% 100%",
      alternative: "222.2 47.4% 11.2%", // Fix
      hover: "0 0% 96%", // Fix
    },
    text: {
      primary: "222.2 47.4% 11.2%",
      secondary: "215.4 16.3% 46.9%",
      disabled: "215.4 16.3% 46.9%", // fix
    },
    primary: {
      main: "217 91% 60%",
      light: "212 96% 78%",
      dark: "224 76% 48%",
      contrastText: "0 0% 100%",
    },
    secondary: {
      main: "291 64% 42%",
      light: "291 47% 60%",
      dark: "282 68% 38%",
      contrastText: "0 0% 100%",
    },
    error: {
      main: "0 65% 51%",
      light: "1 83% 63%",
      dark: "0 66% 47%",
      contrastText: "0 0% 100%",
    },
    warning: {
      main: "27 98% 47%",
      dark: "21 100% 45%",
      light: "36 100% 50%",
      contrastText: "0 0% 100%",
    },
    info: {
      main: "201 98% 41%",
      dark: "199 98% 48%",
      light: "206 99% 31%",
      contrastText: "0 0% 100%",
    },
    success: {
      main: "123 46% 34%",
      dark: "124 55% 24%",
      light: "122 39% 49%",
      contrastText: "0 0% 100%",
    },
    ui: {
      border: "0 0% 83%",
      divider: "0 0% 83%",
      input: "0 0% 83%",
      ring: "0 0% 83%",
      navbar: {
        background: "213 36% 15%",
        backgroundHover: "211 36% 24%",
        text: "0 0% 100%",
      },
    },
  },
  radius: "0.5rem",
};

export const DefaultTheme: Theme = {
  light: defaultLightTheme,
  dark: defaultLightTheme,
  label: "Default",
  name: "core.default",
};
