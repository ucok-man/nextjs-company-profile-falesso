import Hero from "@/components/shared/hero";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <Hero isVideo media={"/hero/bg-video.mp4"} childPosition="bottom">
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
    </div>
  );
}
