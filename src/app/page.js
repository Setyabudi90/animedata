import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {AnimeResponse, NestedAnimeResponse, Converter} from "@/libs/api";
export default async function Home() {
  const anime = await AnimeResponse("top/anime", "limit=10");
  let rekomendedAnime = await NestedAnimeResponse("recommendations/anime", "entry");
  rekomendedAnime = Converter(rekomendedAnime, 10)
  return (
    <>
      <section>
        <Header
          title={"Most Popular"}
          linkHref={"/populer"}
          linkTitle={"View All"}
        />
        <AnimeList api={anime} />
      </section>
      <section>
        <Header
          title={"~Rekomended Anime"}
        />
        <AnimeList api={rekomendedAnime} />
      </section>
    </>
  );
}
