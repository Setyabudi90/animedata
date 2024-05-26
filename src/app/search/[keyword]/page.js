import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { AnimeResponse } from "@/libs/api";
const Page = async ({ params }) => {
  const anime = await AnimeResponse("anime", `q=${params.keyword}`);
  const cleanedString = params.keyword.replace(/%20/g, " ");
  return (
    <>
      <section>
        <Header
          title={`Pencarian untuk ${cleanedString}...`}
          linkHref={"/"}
          linkTitle={"Kembali.."}
        />
        <AnimeList api={anime} />
      </section>
    </>
  );
};

export default Page;
