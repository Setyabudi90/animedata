import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 rounded-md">
      {api.data?.map((anime) => {
        return (
          <div key={anime.mal_id}>
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer hover:text-indigo-600 text-color-primary transition-all">
            <Image
              src={anime.images.webp.image_url}
              alt="image"
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-2xl text-md py-2">
              {anime.title}
            </h3>
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;