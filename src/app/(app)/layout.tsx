import Navbar from "@/components/shared/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <section className="relative min-h-screen bg-slate-600">
      <Navbar />
      <main className="absolute">{children}</main>
    </section>
  );
}
