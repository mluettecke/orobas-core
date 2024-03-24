import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          alternative: "hsl(var(--background-alternative))",
          hover: "hsl(var(--background-hover))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          alternative: "hsl(var(--foreground-alternative))",
          hover: "hsl(var(--foreground-hover))",
        },
        text: {
          DEFAULT: "hsl(var(--text-primary))",
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          disabled: "hsl(var(--text-disabled))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          main: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          contrast: "hsl(var(--primary-contrast))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          main: "hsl(var(--secondary))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
          contrast: "hsl(var(--secondary-contrast))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          main: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
          dark: "hsl(var(--success-dark))",
          contrast: "hsl(var(--success-contrast))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          main: "hsl(var(--info))",
          light: "hsl(var(--info-light))",
          dark: "hsl(var(--info-dark))",
          contrast: "hsl(var(--info-contrast))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          main: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
          dark: "hsl(var(--warning-dark))",
          contrast: "hsl(var(--warning-contrast))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          main: "hsl(var(--danger))",
          light: "hsl(var(--danger-light))",
          dark: "hsl(var(--danger-dark))",
          contrast: "hsl(var(--danger-contrast))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          main: "hsl(var(--error))",
          light: "hsl(var(--error-light))",
          dark: "hsl(var(--error-dark))",
          contrast: "hsl(var(--error-contrast))",
        },
        border: "hsl(var(--border))",
        components: {
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          navbar: {
            background: "hsl(var(--ui-navbar-background))",
            hover: "hsl(var(--ui-navbar-background-hover))",
            text: "hsl(var(--ui-navbar-text))",
          },
        },
        //background: "hsl(var(--background))",
        //foreground: "hsl(var(--foreground))",
        //primary: {
        //  DEFAULT: "hsl(var(--primary))",
        //  foreground: "hsl(var(--primary-foreground))",
        //},
        //secondary: {
        //  DEFAULT: "hsl(var(--secondary))",
        //  foreground: "hsl(var(--secondary-foreground))",
        //},
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        //muted: {
        //  DEFAULT: "hsl(var(--muted))",
        //  foreground: "hsl(var(--muted-foreground))",
        //},
        //accent: {
        //  DEFAULT: "hsl(var(--accent))",
        //  foreground: "hsl(var(--accent-foreground))",
        //},
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
