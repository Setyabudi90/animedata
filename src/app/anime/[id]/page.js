import { AnimeResponse } from "@/libs/api";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import Link from "next/link";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });
export default async function Page({ params: { id } }) {
  const cleaned = id.replace(/%3D/g, '');
  const converter = atob(cleaned)
  const anime = await AnimeResponse(`anime/${converter}`);

  return (
    <>
      <div className="flex flex-col md:gap-2 py-4 md:mx-4 mx-2" ref={scrollContainerRef}>
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.title_japanese}
        </h3>
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.images.jpg.image_url}
              width={250}
              height={250}
              className="w-full md:h-96 rounded object-cover"
            />
          </div>
          <div className="w-full md:h-96">
            <div className="">
              <VideoPlayer ytid={anime.data.trailer.youtube_id} />
            </div>
          </div>
          <div className="flex justify-center items-center p-4 text-xl font-bold overflow-x-auto md:overflow-x-visible">
            <div className="flex space-x-2">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Score: {anime.data.score}
            </span>
            {anime.data.rank ?
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Rank: #{anime.data.rank}
            </span> : ""
            }
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Favorite: {anime.data.favorites}
            </span>
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Popularity: {anime.data.popularity}
            </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4 md:justify-center justify-start">
          <h3 className={`text-2xl sm:text-xl text-color-primary font-bold ${gabarito.className}`} >
            {anime.data.duration} | {anime.data.rating} | {anime.data.status} {anime.data.year ? `| ${anime.data.year}` : ""}
          </h3>
          <p className={`text-slate-300`}>{anime.data.synopsis}</p>
          <Link
            href={`https://myanimelist.net//anime/${anime.data.mal_id}/${anime.data.title}`}
            className="underline text-yellow-500"
          >
            Official Website
          </Link>
        </div>
      </div>
    </>
  );
}
