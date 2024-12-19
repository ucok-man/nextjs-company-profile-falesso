import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Hero isVideo media={"/landing/bg-video.mp4"} childPosition="bottom">
        <div className="flex flex-col justify-center items-center text-bone-100">
          <div className="max-w-screen-sm">
            <div className="">
              <Image
                src="/logo-f-white.png"
                alt="Logo F"
                width={100}
                height={100}
                className="object-contain block mx-auto relative right-5"
              />
            </div>
            <h2 className="text-center text-6xl">Falesso Homes</h2>
            <p className="text-center text-2xl">
              WHERE YOUR <span className="italic">dream home</span> TAKES FLIGHT
            </p>
          </div>
        </div>
      </Hero>

      {/* About section */}
      <section className="bg-bone-100  text-fuscous-700 h-[50vh] min-h-[700px]">
        <div className="h-full flex flex-col justify-center items-center gap-y-8">
          <h3 className="text-3xl tracking-loose max-w-screen-sm text-center leading-none">
            Our standard includes top-notch craftsmanship, elite design, premium
            materials, and flawless construction.
          </h3>
          <Link
            href="/about"
            className="text-lg font-inter tracking-loose uppercase text-center underline underline-offset-4"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bone-50  text-fuscous-700 h-[100vh] min-h-[700px]">
        <div className="h-full flex flex-col justify-center items-center lg:gap-y-8">
          <h2 className="text-6xl tracking-loose max-w-screen-sm text-center leading-none">
            Our Services
          </h2>
          <div className="flex flex-col justify-center lg:flex-row lg:gap-x-8 mt-2 lg:my-8">
            <div className="p-4">
              <Image
                src="/landing/services-home.jpg"
                alt="Home Services"
                width={500}
                height={250}
                className="object-contain w-full max-lg:max-h-[300px]"
              />
              <h2 className="text-xl lg:text-2xl uppercase text-center mt-4">
                Homes
              </h2>
            </div>
            <div className="p-4">
              <Image
                src="/landing/services-landscape.png"
                alt="Home Services"
                width={500}
                height={250}
                className="object-contain w-full max-lg:max-h-[300px]"
              />
              <h2 className="text-xl lg:text-2xl uppercase text-center mt-4">
                Landscape
              </h2>
            </div>
          </div>
          <Link
            href="/services"
            className="text-lg font-inter tracking-loose uppercase text-center"
            passHref
          >
            <Button
              variant={"outline"}
              className="bg-bone-50 hover:bg-fuscous-700 hover:text-bone-100 tracking-widest uppercase"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="bg-fuscous-300  text-bone-100 h-[100vh] min-h-[700px]">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12">
          <div className="col-start-8 col-end-13 row-start-1 row-end-5 overflow-hidden">
            <Image
              src="/landing/showcase-1.jpg"
              alt="Home Services"
              width={1920}
              height={1020}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-start-1 col-end-6 lg:col-end-5 row-start-3 row-end-11 overflow-hidden">
            <Image
              src="/landing/showcase-2.jpg"
              alt="Home Services"
              height={1920}
              width={1020}
              className="object-fill w-full h-full"
            />
          </div>
          <div className="col-start-8 col-end-13 row-start-8 row-end-13 overflow-hidden">
            <Image
              src="/landing/showcase-3.jpg"
              alt="Home Services"
              width={1920}
              height={1020}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-start-6 col-end-8 row-start-4">
            <h2 className="text-6xl md:text-9xl tracking-loose max-w-screen-sm text-start leading-none">
              Our
            </h2>
          </div>
          <div className="col-start-5 col-end-9 row-start-5">
            <h2 className="text-6xl md:text-9xl tracking-loose max-w-screen-sm text-start leading-none">
              Projects
            </h2>
          </div>
          <div className="col-start-6 col-end-11 md:col-end-9 row-start-7">
            <Link
              href="/gallery"
              className="text-lg md:text-2xl font-inter tracking-loose uppercase text-center underline underline-offset-4"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="bg-bone-50  text-fuscous-700 h-[100vh] min-h-[700px]">
        <div className="h-full flex flex-col justify-center items-center lg:gap-y-8">
          <h2 className="text-6xl tracking-loose max-w-screen-sm text-center leading-none">
            Falesso Love
          </h2>
          <div className="max-w-screen-md text-center my-8">
            <p className="text-2xl md:text-3xl">
              “Outstanding design and build. It included a new patio with
              pavers, an outdoor kitchen and pool. Great attention to detail and
              using high quality materials. They are experts in design and
              upgraded our living space past what we thought was possible.
              Excellent customer service.”
            </p>
            <div className="mt-6 text-lg leading-tight flex flex-col justify-center items-center">
              <p className="font-bold">John L.</p>
              <p>
                <span>Sr. Manager of Data Science</span> - <span>Apple</span>
              </p>
              <Image
                src="/landing/review1.png"
                alt="John L"
                height={100}
                width={100}
                className="object-cover rounded-full mt-3"
              />
            </div>
          </div>
          <Link
            href="/reviews"
            className="text-lg font-inter tracking-loose uppercase text-center"
            passHref
          >
            <Button
              variant={"outline"}
              className="bg-bone-50 hover:bg-fuscous-700 hover:text-bone-100 tracking-widest uppercase"
            >
              More Review
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
