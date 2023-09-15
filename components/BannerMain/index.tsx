"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { useEffect, useState } from "react";

export const BannerMain = () => {
  const [count, setCount] = useState(1);

  const handleChange = () => {
    if (count >= 4) {
      setCount(1);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleChange();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <section className="relative rounded-2xl overflow-hidden w-full max-h-[70vh] max-w-screen-lg mx-auto">
      <AspectRatio
        ratio={16 / 9}
        className="flex transition w-full max-h-[80vh] rounded-2xl bg-white bg-opacity-90 shadow-2xl"
      >
        <Image
          className="transition rounded-md object-cover"
          src={`/banner${count}.jpg`}
          alt="banner"
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </AspectRatio>
      <span className="absolute bottom-0 left-0 text-gray-50 backdrop-blur w-full pl-4 ">
        <h1 className="text-2xl z-10 ">Lancamentos</h1>
        <p className="mb-4">Os melhores filmes você só encontra aqui.</p>
      </span>
    </section>
  );
};
