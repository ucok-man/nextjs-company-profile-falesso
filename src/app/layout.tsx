import type { Metadata } from "next";
import { arapey, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Falesso",
    template: "%s | Falesso",
  },
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores quam, eos tempora veniam beatae commodi totam! Neque, ab? Quae recusandae eligendi laboriosam minus fugit aperiam quas molestias repudiandae veritatis?",
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
