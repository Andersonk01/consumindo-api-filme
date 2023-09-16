"use client";
import React from "react";
import Image from "next/image";
import { Home, RadarIcon } from "lucide-react";

import { GenresContext } from "@/context/genres";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";

interface IMovieProp {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  original_title: string;
  original_language: string;
  status: string;
  success: boolean;
}

function DetailMovie() {
  const { idMovie, setIdMovie } = useContext(GenresContext);

  const { data, loading } = useFetch<IMovieProp>(
    `https://api.themoviedb.org/3/movie/${idMovie}?language=en-US`
  );

  const handleReset = () => {
    let idRandom = Math.floor(Math.random() * 100000);
    setIdMovie(idRandom);
  };
  const backMovie =
    data?.backdrop_path === null && data?.poster_path != null
      ? data?.poster_path
      : data?.backdrop_path;

  return (
    <>
      <div className="text-2xl p-2 w-full flex flex-wrap justify-between items-center ">
        {idMovie === 119321 ? (
          <h1 className="text-2xl p-2">Movie Recommendation: </h1>
        ) : (
          <h1 className="text-2xl p-2">Detail Movie:</h1>
        )}

        <Button
          className="min-w-[200px] w-full md:w-auto"
          variant="destructive"
          size="icon"
          onClick={handleReset}
        >
          <RadarIcon className="mr-2 h-4 w-8" /> Random Movie
        </Button>
      </div>

      <section className="relative p-4 min-h-[80vh] grid place-items-center ">
        <div className=" rounded-md p-4 bg-gray-200 flex flex-wrap grid place-items-center sm:grid-cols-1 md:grid-cols-2">
          {!data?.success ? (
            loading ? (
              <p className="text-2xl">Loading...</p>
            ) : (
              <>
                {backMovie ? (
                  <Image
                    className="rounded-md object-cover"
                    src={`https://image.tmdb.org/t/p/w500${backMovie}`}
                    alt="backgound-banner"
                    width={500}
                    height={500}
                  />
                ) : (
                  <h1>No Image :</h1>
                )}

                <div className="w-full p-4 flex flex-col items-center">
                  <h2 className="p-1 text-2xl">{data?.title}</h2>
                  <p className="p-2 text-base">{data?.overview}</p>

                  <ul className="text-gray-500 w-full md:text-center ">
                    <li>Original title: {data?.original_title}</li>
                    <li>Language: {data?.original_language}</li>
                    <li>Status: {data?.status}</li>
                  </ul>
                </div>
              </>
            )
          ) : (
            <h1>No Movie</h1>
          )}

          <div className="p-4 w-full md:col-span-2 grid place-items-center">
            <Link href="/">
              <Button
                className="w-[250px]"
                variant="default"
                size="icon"
                onClick={handleReset}
              >
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailMovie;
