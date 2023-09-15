import "styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Footer } from "@/components/Footer";
import { HeaderMain } from "@/components/HeaderMain";

import GenreCtxProvider from "@/context/genres";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Filmes Anderson",
  description: "Catalogo de filmes",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GenreCtxProvider>
          <HeaderMain />
          {children}
        </GenreCtxProvider>
        <Footer />
      </body>
    </html>
  );
}
