/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arapey: ["var(--font-arapey)"],
        inter: ["var(--font-inter)"],
      },
      clipPath: {
        "circle-0": "circle(0px at calc(100% - 100%) 0px)",
        "circle-full": "circle(100% at center)",
      },
      colors: {
        bone: {
          "50": "#f9f5f3",
          "100": "#f2e9e2",
          "200": "#e1ccbe",
          "300": "#d2b29f",
          "400": "#c08e77",
          "500": "#b2745d",
          "600": "#a56351",
          "700": "#895045",
          "800": "#70423c",
          "900": "#5b3833",
          "950": "#301c1a",
        },

        fuscous: {
          "50": "#f4f4f2",
          "100": "#e3e3de",
          "200": "#cac7be",
          "300": "#aba699",
          "400": "#938c7c",
          "500": "#847d6e",
          "600": "#71685d",
          "700": "#564f48",
          "800": "#4f4944",
          "900": "#46403d",
          "950": "#272321",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-clip-path")],
};
export default config;
