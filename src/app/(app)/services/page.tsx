import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import { Iterate } from "@/components/utility";
import { SERVICE_HOMES, SERVICE_LANDSCAPE } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div>
      <Hero media={"/services/hero.jpg"} childPosition="middle">
        <h1 className="text-white text-6xl text-center">Our Services</h1>
      </Hero>

      <section className="bg-bone-100  text-fuscous-700 p-12 pb-24">
        <h2 className="text-6xl tracking-loose max-w-screen-sm mx-auto text-center leading-none uppercase">
          Landscape
        </h2>
        <div className="flex flex-col lg:flex-row lg:flex-wrap pt-12">
          <Iterate
            items={SERVICE_LANDSCAPE}
            render={(item, idx) => (
              <div key={idx} className="max-w-screen-sm mx-auto">
                <h4 className="text-xl uppercase font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-left text-xl mb-12">{item.description}</p>
              </div>
            )}
          />
        </div>
      </section>

      <section className="bg-fuscous-900  text-bone-200 p-12 pb-24">
        <h2 className="text-6xl tracking-loose max-w-screen-sm mx-auto text-center leading-none uppercase">
          Homes
        </h2>
        <div className="flex flex-col lg:flex-row lg:flex-wrap pt-12">
          <Iterate
            items={SERVICE_HOMES}
            render={(item, idx) => (
              <div key={idx} className="max-w-screen-sm mx-auto">
                <h4 className="text-xl uppercase font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-left text-xl mb-12">{item.description}</p>
              </div>
            )}
          />
        </div>
      </section>

      <section className="bg-bone-50  text-fuscous-700 p-12 pb-24 h-[1080px] relative isolate">
        <div className="w-full h-full flex flex-col gap-y-12 lg:grid lg:grid-cols-12 lg:grid-rows-12">
          <div
            className="col-start-2 col-end-12 row-start-2 row-end-3 z-10
          "
          >
            <h2 className="text-6xl lg:text-7xl tracking-loose max-w-screen-sm text-left leading-none">
              Elevate Your Home with Felasso&apos;s{" "}
              <span className="italic">Expert Touch</span>
            </h2>
            <Link
              href={"/contact#contact"}
              passHref
              className="mt-12 flex items-center justify-center"
            >
              <Button
                variant={"outline"}
                className="bg-fuscous-700 text-base text-bone-50 hover:bg-bone-50 hover:text-fuscous-700 py-5 px-8 rounded-lg tracking-widest uppercase transition-all duration-300 ease-in-out"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="col-start-9 col-end-13 row-start-1 row-end-6 overflow-hidden">
            <div className="flex flex-col items-center w-full h-full">
              <Image
                src={"/services/showcase-modern.jpg"}
                alt="Modern looks"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
              <p className="text-3xl text-center pt-4">Modern</p>
            </div>
          </div>

          <div className="col-start-1 col-end-6 row-start-6 row-end-10 overflow-hidden">
            <div className="flex items-center w-full h-full">
              <Image
                src={"/services/showcase-elegant.jpg"}
                alt="Modern looks"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
              <p className="text-3xl text-center px-4">Elegant</p>
            </div>
          </div>

          <div className="col-start-7 col-end-12 row-start-8 row-end-12 overflow-hidden">
            <div className="flex flex-row-reverse items-center w-full h-full">
              <Image
                src={"/services/showcase-unique.jpg"}
                alt="Modern looks"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
              <p className="text-3xl text-center px-4">Unique</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
