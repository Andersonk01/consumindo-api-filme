import React from "react";
import Image from "next/image";

function DetailMovie() {
  return (
    <section className="relative p-4 min-h-[100vh]">
      <h1 className="text-lg">Detail Movie</h1>
      <div className="w-full h-[400px] flex justify-center items-center">
        <Image
          className="rounded-md object-cover"
          src="/logo.png"
          alt="logo"
          width={250}
          height={300}
        />
        details...
      </div>
    </section>
  );
}

export default DetailMovie;
