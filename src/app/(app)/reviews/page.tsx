import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div>
      <Hero media={"/reviews/hero.jpg"} childPosition="middle">
        <h1 className="text-white text-6xl text-center">Our Reviews</h1>
      </Hero>
      <section className="bg-bone-100  text-fuscous-700 p-12 pb-24">
        <h2 className="text-6xl max-sm:text-5xl tracking-loose max-w-screen-sm mx-auto text-center leading-none uppercase">
          We Exceed <span className="italic">Expectations</span>
        </h2>
        <div className="flex w-full items-center justify-center pt-12">
          <Carousel
            className="w-full max-w-2xl"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="max-w-screen-md text-center my-8">
                    <p className="text-2xl md:text-3xl">
                      “Outstanding design and build. It included a new patio
                      with pavers, an outdoor kitchen and pool. Great attention
                      to detail and using high quality materials. They are
                      experts in design and upgraded our living space past what
                      we thought was possible. Excellent customer service.”
                    </p>
                    <div className="mt-6 text-lg leading-tight flex flex-col justify-center items-center">
                      <p className="font-bold">John L.</p>
                      <p>
                        <span>Sr. Manager of Data Science</span> -{" "}
                        <span>Apple</span>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              size={"icon"}
              className="bg-transparent hover:bg-bone-100"
            />
            <CarouselNext
              size={"icon"}
              className="bg-transparent hover:bg-bone-100"
            />
          </Carousel>
        </div>
      </section>

      <section className="bg-bone-50 text-fuscous-700 p-12 pb-24 h-[100vh] min-h-[900px]">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h2 className="text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-fuscous-800 to-fuscous-500 font-medium uppercase leading-tight tracking-wide animate-pulse-sm duration-5000">
            Excited to bring <br className="hidden sm:block" /> your vision to
            life?
          </h2>
          <p className="text-2xl relative text-bone-900 tracking-wide mt-4 py-2 px-6 bg-fuscous-50 rounded-md shadow-inner transition-all duration-300 ease-in-out">
            Let’s start building your success together today.
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
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
