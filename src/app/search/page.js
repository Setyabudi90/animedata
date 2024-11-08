import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { AnimeResponse } from "@/libs/api";

const Page = async ({ searchParams: { query } }) => {
  const q = atob(query)
  const decoded = decodeURIComponent(q);
  const anime = await AnimeResponse("anime", `q=${decoded}`);
  return (
    <>
      <section>
         <Header
              title={`Pencarian untuk "${decoded}"`}
              linkHref={"/"}
              linkTitle={"Kembali"}
            />
        {anime.data.length === 0 ? (
          <p className="flex justify-center items-center min-h-screen text-2xl font-bold text-color-primary">
            Anime Not Found...
          </p>
        ) : (
          <>
            <AnimeList api={anime} />
          </>
        )}
      </section>
    </>
  );
};

export default Page;
