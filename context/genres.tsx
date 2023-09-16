"use client";
import { useState } from "react";
import { createContext } from "react";

type TGenders = "popularity" | "top" | "action" | "adventure" | string;

type TGenresContext = {
  genreCtx: TGenders;
  setGenreCtx: React.Dispatch<React.SetStateAction<TGenders>>;
  idMovie: number;
  setIdMovie: React.Dispatch<React.SetStateAction<number>>;
};

export const GenresContext = createContext({} as TGenresContext);

type Props = {
  children: React.ReactNode;
};

function GenreCtxProvider({ children }: Props) {
  const [genreCtx, setGenreCtx] = useState<TGenders>("popularity");
  const [idMovie, setIdMovie] = useState<number>(119321);

  return (
    <GenresContext.Provider
      value={{ genreCtx, setGenreCtx, idMovie, setIdMovie }}
    >
      {children}
    </GenresContext.Provider>
  );
}

export default GenreCtxProvider;
