import { AnimeResponse } from "@/libs/api";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { id } }) {
  const anime = await AnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="flex flex-col md:gap-2 py-4 md:mx-4 mx-2">
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
          <div className="flex justify-start items-center p-4 text-xl font-bold">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Score {anime.data.score}
            </span>
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Rank #{anime.data.rank}
            </span>
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-indigo-500">
              Popularity {anime.data.popularity}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4 ">
          <h3 className="text-xl text-color-primary font-bold">
            {anime.data.duration} | {anime.data.rating} | {anime.data.status} |{" "}
            {anime.data.year}
          </h3>
          <p className="text-color-primary">{anime.data.synopsis}</p>
          <Link
            href={`https://myanimelist.net//anime/${id}/${anime.data.title}`}
            className="text-color-primary underline text-yellow-500"
          >
            Official Website
          </Link>
        </div>
      </div>
    </>
  );
}
