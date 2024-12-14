import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full h-screen">
      <div className="h-1/2 flex flex-col justify-center items-center gap-y-8 bg-fuscous-700">
        <h3 className="text-3xl tracking-loose max-w-screen-sm text-center text-bone-200 leading-none">
          The Only Residential Construction Company in The Bay Area Doing
          <span className="italic"> End-to-End </span>Work for a Truly Turn-Key
          Experience.
        </h3>
        <Link
          href="/contact"
          className="text-lg font-inter tracking-loose uppercase text-center text-bone-200 underline underline-offset-4"
        >
          Work With Us
        </Link>
      </div>
      <footer className="h-1/2 flex flex-col justify-center items-center bg-bone-100">
        <div className="max-w-screen-sm">
          <div className="">
            <Image
              src="/logo-f.png"
              alt="Logo F"
              width={100}
              height={100}
              className="object-contain block mx-auto relative right-5"
            />
          </div>
          <h2 className="text-center text-6xl text-fuscous-700">
            Falesso Homes
          </h2>
          <p className="text-center text-fuscous-400 text-2xl">
            WHERE YOUR <span className="italic">dream home</span> TAKES FLIGHT
          </p>
          <p className="text-center text-lg text-fuscous-700 mt-4">
            © 2024 Falasso Homes & Landscape
          </p>
        </div>
      </footer>
    </section>
  );
}
