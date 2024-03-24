export type Color = string;

/**
 * Clickup color variants
 * - main
 * - hover
 * - hover-string
 * - pressed
 * - offset
 * - inverse
 * - inverse-offse
 *
 * MUI action variants
 * Buttons
 * - Active
 * - Hover
 * - Selected
 * - Disabled
 * - Disabled Background
 *
 * Plan
 * - background-primary
 * - background-hover
 * - background-active
 * - background-selected
 *
 
export type ActionColors = {
  hover: Color;
};

export type PaletteColor = {
  lightest: Color;
  light: Color;
  main: Color;
  dark: Color;
  darkest: Color;
};

export type GeneralColor = {
  100: Color;
  200: Color;
  300: Color;
  400: Color;
  500: Color;
  600: Color;
  700: Color;
  800: Color;
  900: Color;
};

export type TextColor = {
  primary: Color;
  secondary: Color;
  disabled: Color;
};

export type BackgroundColor = {
  main: Color;
  alternative: Color;
  modifier: ModifierColor;
};

export type ModifierColor = {
  hover: Color;
  active: Color;
  activeHover: Color;
  disabled: Color;
};

export type ThemeTokens2 = {
  palette: {
    background: BackgroundColor;
    backgroundSecondary: BackgroundColor;
    foreground: BackgroundColor;
    // main colors
    primary: PaletteColor;
    secondary: PaletteColor;
    // black and white
    black: Color;
    white: Color;
    // special colors
    accent: Color;
    // indicator colors
    info: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
    danger: PaletteColor;
    error: PaletteColor;
    // ui specific
    ui: {
      border: Color;
      divider: Color;
    };
    typography: {
      normal: Color;
      muted: Color;
      faint: Color;
    };
    // general colors
    //slate: GeneralColor;
    //gray: GeneralColor;
    //zinc: GeneralColor;
    //neutral: GeneralColor;
    //stone: GeneralColor;
    //red: GeneralColor;
    //orange: GeneralColor;
    //amber: GeneralColor;
    //yellow: GeneralColor;
    //lime: GeneralColor;
    //green: GeneralColor;
    //emerald: GeneralColor;
    //teal: GeneralColor;
    //cyan: GeneralColor;
    //sky: GeneralColor;
    //blue: GeneralColor;
    //indigo: GeneralColor;
    //violet: GeneralColor;
    //purple: GeneralColor;
    //fuchsia: GeneralColor;
    //pink: GeneralColor;
    //rose: GeneralColor;
  };
};

export type ClickupTokens = {
  background: {
    // light background
    // white -> grey
    main: {
      default: string; // white
      dark: string; // grey-25
      hover: string; // grey-50
      hoverString: string; // grey-100
      pressed: string; // grey-200
      offset: string; // white
      inverse: string; // grey-1000
      inverseOffset: string; // grey-1000
    };
    onMain: {
      default: string; // grey-100
      hover: string; // grey-200
      pressed: string; // grey-300
    };
    // subtle/alternative background
    subtle: {
      default: string; // grey-50
      hover: string; // grey-100
      hoverOffset: string; // grey-200
      hoverStrong: string; // grey-200
      pressed: string; // grey-300
      offset: string; // grey-50
    };
    onSubtle: {
      default: string; // grey-200
      hover: string; // grey-300
      pressed: string; // grey-200
    };
    // blue variations
    primary: {
      default: string; // blue-600
      hover: string; // blue-700
      pressed: string; // blue-800
      disabled: string; // blue-200
      dark: string; // blue-1100
      subtle: string; // blue-50
      onSubtle: string; // blue-100
      onSubtleHover: string; // blue-200
    };
  };
};
*/
type PaletteColor = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

type TextColor = {
  primary: string;
  secondary: string;
  disabled: string;
};

type MainColor = {
  default: string;
  alternative: string;
  hover: string;
};

export type ThemeTokens = {
  palette: {
    // main colors
    background: MainColor;
    foreground: MainColor;
    // text colors
    text: TextColor;
    // general palette colors
    primary: PaletteColor;
    secondary: PaletteColor;
    // indicator colors
    success: PaletteColor;
    info: PaletteColor;
    warning: PaletteColor;
    error: PaletteColor;
    // ui specific
    ui: {
      border: Color;
      divider: Color;
      ring: Color;
      input: Color;
      navbar: {
        background: Color;
        backgroundHover: Color;
        text: Color;
      };
    };
  };
  radius: string;
};

export type Theme = {
  name: string;
  label: string;
  light: ThemeTokens;
  dark: ThemeTokens;
};
