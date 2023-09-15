"use client";
import { useState } from "react";
import { createContext } from "react";

type TGenders = "popularity" | "top" | "action" | "adventure" | string;

type TGenresContext = {
  genreCtx: TGenders;
  setGenreCtx: React.Dispatch<React.SetStateAction<TGenders>>;
};

export const GenresContext = createContext({} as TGenresContext);

type Props = {
  children: React.ReactNode;
};

function GenreCtxProvider({ children }: Props) {
  const [genreCtx, setGenreCtx] = useState<TGenders>("popularity");

  return (
    <GenresContext.Provider value={{ genreCtx, setGenreCtx }}>
      {children}
    </GenresContext.Provider>
  );
}

export default GenreCtxProvider;
