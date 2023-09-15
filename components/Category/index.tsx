"use client";
import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";

import { GenresContext } from "@/context/genres";

export const Category = () => {
  const { setGenreCtx, genreCtx } = useContext(GenresContext);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleAction = () => {
    setGenreCtx("action");
    setActiveButton("action");
  };
  const handleAdventure = () => {
    setGenreCtx("adventure");
    setActiveButton("adventure");
  };

  const handleTop = () => {
    setGenreCtx("top");
    setActiveButton("top_rated");
  };

  return (
    <section className="flex flex-col gap-0 mt-4 mb-4">
      <h2 id="movies" className="block font-bold text-base text-gray-500 mb-2">
        Category
      </h2>
      <div className="rounded-md h-[48px] bg-gray-200 flex items-center p-2 ">
        <Button
          onClick={handleAction}
          variant={activeButton === "action" ? "secondary" : "ghost"}
        >
          Action
        </Button>
        <Button
          onClick={handleAdventure}
          variant={activeButton === "adventure" ? "secondary" : "ghost"}
        >
          Adventure
        </Button>
        <Button
          onClick={handleTop}
          variant={activeButton === "top_rated" ? "secondary" : "ghost"}
        >
          Top
        </Button>
      </div>
    </section>
  );
};
