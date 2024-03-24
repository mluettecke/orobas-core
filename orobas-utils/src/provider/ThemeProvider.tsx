import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { DefaultTheme } from "@/themes/baseThemes/Default";
import { Theme, ThemeTokens } from "@/themes/types";

type ThemeMode = "dark" | "light";

type ThemeProviderState = {
  themes: Theme[];
  currentTheme: Theme;
  themeMode: ThemeMode;
  setTheme: (theme: Theme) => void;
  toggleThemeMode: () => void;
};

const initialState: ThemeProviderState = {
  themes: [DefaultTheme],
  currentTheme: DefaultTheme,
  themeMode: "light",
  setTheme: () => null,
  toggleThemeMode: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

type ThemeProviderProps = {
  children: ReactNode;
};

function mapThemeToVariables(theme: ThemeTokens) {
  return {
    //"--background": theme.background,
    //"--foreground": theme.foreground,
    //"--muted": theme.muted,
    //"--muted-foreground": theme.mutedForeground,
    //"--popover": theme.popover,
    //"--popover-foreground": theme.popoverForeground,
    //"--border": theme.border,
    //"--input": theme.input,
    //"--card": theme.card,
    //"--card-foreground": theme.cardForeground,
    //"--primary": theme.primary,
    //"--primary-foreground": theme.primaryForeground,
    //"--secondary": theme.secondary,
    //"--secondary-foreground": theme.secondaryForeground,
    //"--accent": theme.accent,
    //"--accent-foreground": theme.accentForeground,
    //"--destructive": theme.destructive,
    //"--destructive-foreground": theme.destructiveForeground,
    //"--ring": theme.ring,
    //"--radius": theme.radius,
    "--background": theme.palette.background.default,
    "--bacground-alternative": theme.palette.background.alternative,
    "--background-hover": theme.palette.background.hover,
    "--foreground": theme.palette.foreground.default,
    "--foreground-alternative": theme.palette.foreground.alternative,
    "--foreground-hover": theme.palette.foreground.hover,
    "--text-primary": theme.palette.text.primary,
    "--text-secondary": theme.palette.text.secondary,
    "--text-disabled": theme.palette.text.disabled,
    "--primary": theme.palette.primary.main,
    "--primary-light": theme.palette.primary.light,
    "--primary-dark": theme.palette.primary.dark,
    "--primary-contrast": theme.palette.primary.contrastText,
    "--secondary": theme.palette.secondary.main,
    "--secondary-light": theme.palette.secondary.light,
    "--secondary-dark": theme.palette.secondary.dark,
    "--secondary-contrast": theme.palette.secondary.contrastText,
    "--success": theme.palette.success.main,
    "--success-light": theme.palette.success.light,
    "--success-dark": theme.palette.success.dark,
    "--success-contrast": theme.palette.success.contrastText,
    "--info": theme.palette.info.main,
    "--info-light": theme.palette.info.light,
    "--info-dark": theme.palette.info.dark,
    "--info-contrast": theme.palette.info.contrastText,
    "--warning": theme.palette.warning.main,
    "--warning-light": theme.palette.warning.light,
    "--warning-dark": theme.palette.warning.dark,
    "--warning-contrast": theme.palette.warning.contrastText,
    "--error": theme.palette.error.main,
    "--error-light": theme.palette.error.light,
    "--error-dark": theme.palette.error.dark,
    "--error-contrast": theme.palette.error.contrastText,
    "--border": theme.palette.ui.border,
    "--ring": theme.palette.ui.border,
    "--ui-navbar-background": theme.palette.ui.navbar.background,
    "--ui-navbar-background-hover": theme.palette.ui.navbar.backgroundHover,
    "--ui-navbar-text": theme.palette.ui.navbar.text,
  };
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { themes } = useContext(ThemeProviderContext);

  const [currentTheme, setCurrentTheme] = useState<Theme>(DefaultTheme);
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  function applyTheme(theme: Theme) {
    setCurrentTheme(theme);
    const mappedTheme = mapThemeToVariables(theme[themeMode]);

    const root = document.documentElement;

    Object.entries(mappedTheme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  function toggleThemeMode() {
    setThemeMode((value) => {
      if (value === "dark") {
        return "light";
      }
      return "dark";
    });
  }

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme, themeMode]);

  return (
    <ThemeProviderContext.Provider
      value={{
        themes: themes,
        currentTheme: currentTheme,
        themeMode: themeMode,
        setTheme: applyTheme,
        toggleThemeMode,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}
