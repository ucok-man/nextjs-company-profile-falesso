import Hero from "@/components/shared/hero";
import { Iterate } from "@/components/utility";
import { COMPANY_MISSION, COMPANY_VALUES } from "@/constant";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <Hero media={"/about/hero.jpg"} childPosition="middle">
        <h1 className="text-white text-6xl text-center">Who we are?</h1>
      </Hero>

      <section className="bg-bone-100  text-fuscous-700 p-12 pb-24">
        <h2 className="text-8xl tracking-loose max-w-screen-sm mx-auto text-center leading-none uppercase">
          Clean Work
        </h2>
        <div className="pt-12 text-xl max-w-screen-sm lg:text-center mx-auto">
          <p>
            At Felasso Homes & Landscape, our focus is on creating sustainable,
            eco-friendly home and landscape designs that are both beautiful and
            environmentally responsible. We use non-toxic, reusable local
            materials and specialize in drought-tolerant landscaping,
            incorporating the latest innovations in drip irrigation, graywater
            systems, and rainwater harvesting. Our goal is to design landscapes
            and homes that are as stunning as they are sustainable, helping to
            keep our planet green for generations.{" "}
          </p>
          <p className="pt-6 text-xl max-w-screen-sm lg:text-center mx-auto">
            With over a decade of experience, Felasso Homes & Landscape has
            become a trusted name in the Bay Area for high-end landscape design
            and home remodeling services. We are passionate about crafting
            breathtaking, functional spaces while protecting what we value
            most—our planet. Whether you need landscaping, remodeling, or
            sustainable home solutions, our team is committed to delivering
            quality, beauty, and environmental stewardship with every project.
          </p>
        </div>
      </section>

      <section className="bg-bone-900  text-fuscous-200 p-12 pb-24">
        <h2 className="text-6xl tracking-loose max-w-screen-sm mx-auto text-center leading-none uppercase">
          Values & Mission
        </h2>
        <div className="pt-12 flex flex-col lg:flex-row lg:gap-x-12 ">
          <div className="w-full h-full lg:w-1/2 my-auto">
            <Image
              src={"/about/mountain.jpg"}
              alt="Modern looks"
              width={500}
              height={500}
              className="object-cover w-full h-full max-h-[500px]"
            />
          </div>
          <div className="lg:w-1/2 pt-12 lg:pt-0">
            <div>
              <Iterate
                items={COMPANY_VALUES}
                render={(item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-start items-start border-b py-6"
                  >
                    <span className="w-1/2 text-3xl">{item.name}</span>
                    <span className="w-1/2 text-xl">{item.description}</span>
                  </div>
                )}
              />
            </div>
            <div className="pt-12">
              <h3 className="text-3xl">Mission</h3>
              <p className="text-xl pt-3">{COMPANY_MISSION}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone-50  text-fuscous-700 p-12 pb-24">
        <div className="w-full flex justify-center items-center">
          <div className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-200px),transparent_100%)] w-full">
            <Iterate
              items={[1, 2, 3, 4, 5, 6]}
              render={(item, idx) => (
                <h2
                  key={idx}
                  className="text-7xl tracking-loose text-nowrap text-center leading-none uppercase animate-infinite-scroll px-12"
                >
                  Our Teams
                </h2>
              )}
            />
          </div>
        </div>
        <div className="mt-24 flex flex-col md:flex-row gap-9">
          <Image
            src={"/about/founder.jpg"}
            alt="Founder"
            width={400}
            height={400}
            className="object-cover h-[400px] rounded-sm"
          />
          <div className="max-w-4xl">
            <h2 className="text-4xl tracking-tight font-medium leading-none">
              Angela Yu & Jim Morello
            </h2>
            <p className="mb-6 font-medium italic text-lg">Founder</p>
            <div className="text-lg">
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ducimus necessitatibus adipisci nam cupiditate dolores rerum
                iure pariatur quam velit nulla harum numquam, autem ipsam
                laborum! Officia in ab id.
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quidem quibusdam, ea laboriosam neque iusto, ipsum
                reprehenderit ducimus consequatur, similique soluta.
                Exercitationem quia, repudiandae voluptatem beatae modi
                consequuntur tempore porro perferendis? Nesciunt, accusantium
                ducimus! Neque repudiandae quos deleniti dolores quisquam.
                Laudantium ea repudiandae quisquam cum. Commodi libero rem
                quaerat perspiciatis?
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ducimus necessitatibus adipisci nam cupiditate dolores rerum
                iure pariatur quam velit nulla harum numquam, autem ipsam
                laborum! Officia in ab id.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
