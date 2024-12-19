import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import { Iterate } from "@/components/utility";
import { PROJECT_SHOW_CASE } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div>
      <Hero media={"/gallery/hero.jpg"} childPosition="dynamic">
        <h1 className="text-white text-7xl text-center">
          Meet the Project <br /> We Love
        </h1>
      </Hero>

      <section className="bg-fuscous-300  text-fuscous-950 p-12 pb-24 grid lg:grid-cols-2 lg:grid-row-3 gap-24">
        <Iterate
          items={PROJECT_SHOW_CASE}
          render={(item, idx) => (
            <div
              key={idx}
              className={cn(
                "flex gap-2 max-md:flex-col",
                idx === 1 && "lg:relative lg:top-28",
                idx === 2 && "lg:flex-row-reverse lg:text-right",
                idx === 3 && "lg:relative lg:top-40",
                idx === 4 && "lg:relative lg:left-40"
              )}
            >
              <div className="mb-6">
                <h2 className="text-4xl">{item.title}</h2>
                <p className="leading-tight text-lg">{item.short}</p>
              </div>

              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="object-cover w-full max-h-[300px] max-w-[500px] min-w-[300px] rounded-sm"
              />
            </div>
          )}
        />
      </section>

      <section className="bg-bone-50 text-fuscous-700 p-12 pb-24 h-[100vh] min-h-[900px]">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h2 className="text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-fuscous-800 to-fuscous-500 font-medium uppercase leading-tight tracking-wide animate-pulse-sm duration-5000">
            Ready to transform <br className="hidden sm:block" /> your ideas
            into reality?
          </h2>
          <p className="text-2xl relative text-bone-900 tracking-wide mt-4 py-2 px-6 bg-fuscous-50 rounded-md shadow-inner transition-all duration-300 ease-in-out">
            Start your journey with us and unlock limitless possibilities.
          </p>
          <Link
            href={"/contact#contact"}
            passHref
            className="mt-12 flex items-center justify-center"
          >
            <Button
              variant={"outline"}
              className="bg-fuscous-700 text-base text-bone-50 hover:bg-bone-50 hover:text-fuscous-700 py-5 px-8 rounded-lg tracking-widest uppercase transition-all duration-300 ease-in-out"
            >
              Let&apos;s begin
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
