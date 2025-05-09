"use client";

import { Button } from "@/components/ui/button";
import { Iterate } from "@/components/utility";
import { MENU_LINK, SOSMEDS } from "@/constant";
import { cn } from "@/lib/utils";
import { Pivot as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="font-arapey">
      <DesktopNav scrolled={isScrolled} />
      <MobileNav scrolled={isScrolled} />
    </nav>
  );
}

function DesktopNav({ scrolled }: { scrolled: boolean }) {
  const pathname = usePathname();

  return (
    <section className="fixed max-lg:hidden w-full z-20">
      <div
        className={cn(
          "p-4 py-2 flex justify-between items-center",
          scrolled && "bg-fuscous-700 transition-all duration-700"
        )}
      >
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/falesso-logo.png"}
            alt="Logo"
            width={850}
            height={250}
            className="object-cover max-w-[250px] mx-auto"
          />
        </Link>
        <ul className="flex items-center justify-end h-full w-full gap-x-8">
          <Iterate
            items={MENU_LINK}
            render={(item, idx) => (
              <Link href={item.link} passHref key={idx}>
                <Button
                  variant="link"
                  className={cn(
                    "text-xl text-bone-100 p-0",
                    pathname === item.link && "underline underline-offset-4"
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            )}
          />
        </ul>
        <ul className="flex gap-x-4 ml-8 mr-3">
          <Iterate
            items={SOSMEDS}
            render={(item, idx) => (
              <span
                className="text-bone-100 text-sm p-2 rounded-full border cursor-pointer"
                key={idx}
              >
                <a href={item.url} target="_blank">
                  <item.svg />
                </a>
              </span>
            )}
          />
        </ul>
      </div>
    </section>
  );
}

function MobileNav({ scrolled }: { scrolled: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <section className={cn("lg:hidden")}>
      {/* Navbar Header */}
      <div
        className={cn(
          "fixed p-8 py-4 w-full flex justify-center items-center z-30",
          scrolled && "bg-fuscous-700 transition-all duration-700"
        )}
      >
        <Hamburger color="white" toggled={menuOpen} toggle={setMenuOpen} />
        <div className="grow">
          <Link
            href="/"
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src={"/falesso-logo.png"}
              alt="Logo"
              width={850}
              height={250}
              className="object-cover max-w-[250px] mx-auto"
            />
          </Link>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={cn(
          "fixed bg-fuscous-500 inset-0 z-20",
          "transition-all duration-500 ease",
          "clip-path-circle-0",
          menuOpen && "clip-path-circle-full"
        )}
      >
        <ul className="p-8 flex flex-col items-center justify-center h-full w-full gap-y-6 min-h-[700px]">
          <Iterate
            items={MENU_LINK}
            render={(item, idx) => (
              <Link href={item.link} passHref key={idx}>
                <Button
                  onClick={() => setMenuOpen(false)}
                  variant="link"
                  className={cn(
                    "text-3xl md:text-4xl text-bone-100",
                    pathname === item.link && "scale-110 text-fuscous-800"
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            )}
          />

          <div className="flex gap-x-6 mt-12">
            <Iterate
              items={SOSMEDS}
              render={(item, idx) => (
                <span
                  className="text-bone-100 text-2xl p-4 rounded-full border cursor-pointer"
                  key={idx}
                >
                  <a href={item.url} target="_blank">
                    <item.svg />
                  </a>
                </span>
              )}
            />
          </div>
        </ul>
      </div>
    </section>
  );
}
