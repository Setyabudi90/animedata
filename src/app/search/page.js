import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { AnimeResponse } from "@/libs/api";
const Page = async ({ searchParams: { query } }) => {
  const decoded = decodeURIComponent(query);
  const anime = await AnimeResponse("anime", `q=${decoded}`);
  return (
    <>
      <section>
        {anime.data.length === 0 ? (
          <p className="flex justify-center items-center min-h-screen text-2xl font-bold text-color-primary">
            "Anime not found. Please check the name or try different keywords."
          </p>
        ) : (
            <Header
          title={`Pencarian untuk "${decoded}"...`}
          linkHref={"/"}
          linkTitle={"Kembali.."}
        />
          <AnimeList api={anime} />
        )}
      </section>
    </>
  );
};


export default Page;
