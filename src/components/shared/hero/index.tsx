/* eslint-disable @typescript-eslint/no-explicit-any */
import { If } from "@/components/utility";
import Image from "next/image";
import React from "react";

type Props = {
  isVideo?: boolean;
  media: any;
  childPosition: "middle" | "bottom" | "dynamic";
  children: React.ReactNode;
};

export default function Hero({
  children,
  childPosition,
  media,
  isVideo = false,
}: Props) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/40"></div>
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
          <Image
            src={media}
            alt="BG IMAGE"
            width={1920}
            height={1080}
            className="object-cover w-full h-full min-h-screen"
          />
        </If>
      </div>
      <If condition={childPosition === "bottom"}>
        <div className="absolute z-10 bottom-20 w-full">{children}</div>
      </If>
      <If condition={childPosition === "middle"}>
        <div className="absolute z-10 bottom-[calc(100vh-50%)] w-full">
          {children}
        </div>
      </If>
      <If condition={childPosition === "dynamic"}>
        <div className="absolute z-10 max-sm:bottom-20 w-full bottom-[calc(100vh-50%)]">
          {children}
        </div>
      </If>
    </section>
  );
}
