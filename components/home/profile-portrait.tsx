"use client";

import Image, { type StaticImageData } from "next/image";

export function ProfilePortrait({ src }: Readonly<{ src: StaticImageData }>) {
  return (
    <div className="portrait-stage relative mx-auto h-[clamp(200px,34svh,300px)] w-[min(76vw,350px)] overflow-hidden sm:h-[clamp(250px,34svh,340px)] sm:w-[min(62vw,470px)] lg:h-auto lg:w-[min(43vw,560px)]" aria-label="Portrait of Pankaj Borah">
      <Image
        src={src}
        alt="Portrait of Pankaj Borah"
        priority
        sizes="(max-width: 639px) 76vw, (max-width: 1023px) 62vw, 43vw"
        className="portrait-image relative z-10 mx-auto block h-full w-auto max-w-full object-contain object-bottom lg:h-auto lg:w-full"
      />
    </div>
  );
}
