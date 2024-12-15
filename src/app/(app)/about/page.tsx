import Hero from "@/components/shared/hero";

export default function AboutPage() {
  return (
    <div>
      <Hero media={"/about/hero.jpg"} childPosition="middle">
        <h1 className="text-white text-6xl text-center">Who we are?</h1>
      </Hero>
    </div>
  );
}
