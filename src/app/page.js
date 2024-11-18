import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { AnimeResponse, NestedAnimeResponse, Converter } from "@/libs/api";
import RekomendedAnime from "@/components/Recomendation";

export default async function Home() {
  const anime = await AnimeResponse("top/anime", "limit=10");
  let rekomendedAnime = await NestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  rekomendedAnime = Converter(rekomendedAnime, 10);
  return (
    <>
      <section data-content={btoa(~~(Math.random() * 10000) + "Content")}>
        <Header
          title={"Paling Populer"}
          linkHref={"/populer"}
          linkTitle={"View All"}
        />
        <AnimeList api={anime} />
      </section>
      <section
        data-content={btoa(~~(Math.random() * 10000) + "RekomendedContent")}
      >
        <Header title={"Rekomended Anime"} />
        <RekomendedAnime api={rekomendedAnime} />
      </section>
    </>
  );
}
