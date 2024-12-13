import { Arapey, Inter } from "next/font/google";

export const arapey = Arapey({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-arapey",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
