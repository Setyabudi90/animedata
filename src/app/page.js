import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { AnimeResponse, NestedAnimeResponse, Converter } from "@/libs/api";
import RekomendedAnime from "@/components/Recomendation";
import { GoogleTagManager } from "@next/third-parties/google";
export default async function Home() {
  const anime = await AnimeResponse("top/anime", "limit=10");
  let rekomendedAnime = await NestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  rekomendedAnime = Converter(rekomendedAnime, 10);
  return (
    <>
      <GoogleTagManager gtmId="GTM-W4GRZ8HG" />
      <section
        data-content={btoa(~~(Math.random() * 10000) + "Content")}
        id={"Popular-" + ~~(Math.random() * 10000)}
      >
        <Header
          title={"Paling Populer"}
          linkHref={"/populer"}
          linkTitle={"View All"}
        />
        <AnimeList api={anime} />
      </section>
      <section data-content={btoa(~~(Math.random() * 10000) + "RekomendedContent")}
        id={"PopularRekomended" + ~~(Math.random() * 10000)}>
        <Header title={"Rekomended Anime"} />
        <RekomendedAnime api={rekomendedAnime} />
      </section>
    </>
  );
}
