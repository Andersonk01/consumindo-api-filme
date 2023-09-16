"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import useFetch from "@/hooks/useFetch";
import { useContext } from "react";
import { GenresContext } from "@/context/genres";
import Link from "next/link";

interface IResult {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
}

interface ApiResponse {
  results: IResult[];
}

export const SectionMovie = () => {
  const { genreCtx, setIdMovie } = useContext(GenresContext);

  const handleIdMovie = (id: number) => {
    setIdMovie(id);
  };

  const { data, loading } = useFetch<ApiResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE}${genreCtx}&include_adult=false&language=en-US&page=1`
  );
  const movies: IResult[] | undefined = data?.results;

  return loading ? (
    <p>loading...</p>
  ) : (
    movies?.map((item) => (
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
          <Link href="/detail">
            <Button
              onClick={() => handleIdMovie(item.id)}
              className="w-full"
              variant="destructive"
            >
              Detalhes
            </Button>
          </Link>
        </div>
      </div>
    ))
  );
};
