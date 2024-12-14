/* eslint-disable @typescript-eslint/no-explicit-any */
import { If } from "@/components/utility";
import Image from "next/image";
import React from "react";

type Props = {
  isVideo?: boolean;
  media: any;
  children: React.ReactNode;
};

export default function Hero({ children, media, isVideo = false }: Props) {
  return (
    <section>
      <div className="w-full max-h-screen min-h-screen overflow-hidden">
        <If condition={isVideo}>
          <video
            className="w-full h-full min-h-screen object-cover"
            src={media}
            // autoPlay
            // loop
            // muted
            autoPlay={false}
          />
        </If>
        <If condition={!isVideo}>
          <Image src={media} alt="BG IMAGE" width={1920} height={1080} />
        </If>
      </div>
      <div>{children}</div>
    </section>
  );
}
