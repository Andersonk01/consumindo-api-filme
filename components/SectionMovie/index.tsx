"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import useFetch from "@/hooks/useFetch";
import { useContext } from "react";
import { GenresContext } from "@/context/genres";

export interface IResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const SectionMovie = () => {
  const { genreCtx } = useContext(GenresContext);

  const { data, loading } = useFetch<IResult[]>(
    `https://api.themoviedb.org/3/search/movie?query=${genreCtx}&include_adult=false&language=en-US&page=1`
  );

  return loading ? (
    <p>loading...</p>
  ) : (
    data?.map((item) => (
      <div
        key={item.id}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col max-w-[250px] max-h-[510px] justify-between  m-2 p-2 rounded-md bg-gray-200 hover:p-0"
      >
        <Image
          className="rounded-md object-cover"
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "/logo.png"
          }
          alt={item.title}
          width={250}
          height={300}
        />
        <div>
          <h1 className="p-1 text-base truncate">{item.title}</h1>
          <p className=" text-xs max-h-[100px] line-clamp-4">{item.overview}</p>
          <Button className="w-full" variant="destructive">
            Detalhes
          </Button>
        </div>
      </div>
    ))
  );
};
