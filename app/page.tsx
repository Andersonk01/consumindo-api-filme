import { BannerMain } from "@/components/BannerMain";
import { Category } from "@/components/Category";
import { SectionMovie } from "@/components/SectionMovie";

export default function Home() {
  return (
    <main className="relative p-4 min-h-[200vh]">
      <BannerMain />
      <Category />
      <section className="gap-y-11 flex flex-wrap gap-1 justify-center">
        <SectionMovie />
      </section>
    </main>
  );
}
