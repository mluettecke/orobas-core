type PaletteColor = {
  main: string;
  light: string;
  dark: string;
};

type TextColor = {
  primary: string;
  secondary: string;
  disabled: string;
};

export type ThemeTokens = {
  palette: {
    background: string;
    foreground: string;
    text: TextColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    success: PaletteColor;
    info: PaletteColor;
    warning: PaletteColor;
    error: PaletteColor;
  };
  colors: {};
};
