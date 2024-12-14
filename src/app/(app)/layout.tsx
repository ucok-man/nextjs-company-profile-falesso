import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <section className="relative font-arapey bg-fuscous-100">
      <Navbar />
      <main className="absolute inset-0">
        {children}
        <Footer />
      </main>
    </section>
  );
}
