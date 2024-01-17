import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { DefaultTheme } from "@/themes/DefaultTheme";
import { DraculaTheme } from "@/themes/Dracula";

export type ThemeVariables = {
  // background and foreground colors
  background: string;
  foreground: string;

  // primary color
  primary: string;
  primaryForeground: string;

  // secondary color
  secondary: string;
  secondaryForeground: string;

  // special colors
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  destructive: string;
  destructiveForeground: string;

  // component colors
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  border: string;
  input: string;

  // other
  ring: string;
  radius: string;
};

export type Theme = {
  name: string;
  light: ThemeVariables;
  dark: ThemeVariables;
};

type ThemeMode = "dark" | "light";

type ThemeProviderState = {
  themes: Theme[];
  currentTheme: Theme;
  themeMode: ThemeMode;
  setTheme: (theme: Theme) => void;
  toggleThemeMode: () => void;
};

const initialState: ThemeProviderState = {
  themes: [DefaultTheme, DraculaTheme],
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

function mapThemeToVariables(theme: ThemeVariables) {
  return {
    "--background": theme.background,
    "--foreground": theme.foreground,
    "--muted": theme.muted,
    "--muted-foreground": theme.mutedForeground,
    "--popover": theme.popover,
    "--popover-foreground": theme.popoverForeground,
    "--border": theme.border,
    "--input": theme.input,
    "--card": theme.card,
    "--card-foreground": theme.cardForeground,
    "--primary": theme.primary,
    "--primary-foreground": theme.primaryForeground,
    "--secondary": theme.secondary,
    "--secondary-foreground": theme.secondaryForeground,
    "--accent": theme.accent,
    "--accent-foreground": theme.accentForeground,
    "--destructive": theme.destructive,
    "--destructive-foreground": theme.destructiveForeground,
    "--ring": theme.ring,
    "--radius": theme.radius,
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
