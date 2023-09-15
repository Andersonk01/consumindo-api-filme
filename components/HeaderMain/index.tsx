"use client";
import Link from "next/link";
import { ChevronRight, ActivityIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

import { GenresContext } from "@/context/genres";
import { useContext, useState } from "react";

export const HeaderMain = () => {
  const { setGenreCtx } = useContext(GenresContext);
  const [genre, setGenre] = useState("");

  const handleClick = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGenre();
      window.scrollTo(0, 600);
    } else return;
  };

  window.addEventListener("keydown", (e) => handleClick(e));

  const handleGenre = () => {
    setGenreCtx("");
    if (genre === "") {
      setGenreCtx("popularity");
    } else {
      setGenreCtx(genre);
    }
  };

  return (
    <header className="bg-white">
      <nav className="flex flex-wrap items-center justify-between h-16 px-4 sm:px-10 mt-2">
        <Link
          href="http://github.com/andersonk01"
          className="hidden sm:flex items-center text-xs h-full mx-2 sm:mx-4 hover:bg-gray-500 hover:text-white p-2"
          target="_blank"
        >
          <ActivityIcon className="mr-2 h-4 w-4" /> Anderson Kauer
        </Link>

        <div className="flex flex-grow justify-end items-center mx-2 sm:mx-4">
          <Input
            placeholder="Search..."
            className="rounded flex-1 mr-1"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <Link href="#movies">
            <Button
              className="max-w-[200px] w-max p-2 ml-1"
              variant="default"
              size="icon"
              onClick={handleGenre}
            >
              <ChevronRight className="mr-2 h-4 w-4" /> Search
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
