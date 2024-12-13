import type { Metadata } from "next";
import { arapey, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falesso |",
  description: "Luxury home construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arapey.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
