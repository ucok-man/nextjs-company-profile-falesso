import ContactForm from "@/components/shared/contact-form";
import Hero from "@/components/shared/hero";
import { Iterate } from "@/components/utility";
import { SOSMEDS } from "@/constant";

export default function ContactPage() {
  return (
    <div>
      <Hero media={"/contact/hero.jpg"} childPosition="dynamic">
        <h1 className="text-white text-7xl text-center">
          Let’s Make Something <br /> Beautiful Together
        </h1>
      </Hero>

      <section
        className="bg-bone-100  text-fuscous-700 p-12 pb-24"
        id="contact"
      >
        <div className="flex max-lg:flex-col gap-8">
          <div className="flex flex-col justify-start gap-6 text-right lg:w-1/2 w-full pt-12">
            <h2 className="text-8xl max-sm:text-7xl tracking-loose max-w-screen-sm text-left leading-none uppercase lg:ml-8">
              Contact Us
            </h2>

            <div className="relative left-2 lg:ml-8">
              <div className="flex gap-6">
                <Iterate
                  items={SOSMEDS}
                  render={(item, idx) => (
                    <span
                      className="text-fuscous-700 text-2xl p-2 rounded-full border-2 border-fuscous-700 cursor-pointer "
                      key={idx}
                    >
                      <a href={item.url} target="_blank">
                        <item.svg />
                      </a>
                    </span>
                  )}
                />
              </div>
              <div className="text-lg text-left">
                support@felassohomes.com +1 444-666-7788
                <br /> 2089 S Bascom Ave Campbell,
                <br /> CA 95008 United States
              </div>
            </div>
          </div>
          <div className="pt-12 text-xl mx-auto lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
