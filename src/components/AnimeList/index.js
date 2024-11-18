import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 rounded-md px-2 md:px-3">
      {api.data?.map((anime, index) => {
        return (
          <div key={index} className="md:px-2">
            <Link
              href={`/anime/${btoa(anime.mal_id)}`}
              className={`cursor-pointer hover:text-indigo-600 text-color-primary transition-all`}
            >
              <Image
                src={anime.images.webp.image_url}
                alt={`${btoa(index)}`}
                width={350}
                height={350}
                priority={true}
                className="w-full max-h-64 object-cover rounded"
              />
              <p className="font-bold md:text-xl px-2 text-md py-2">
                {anime.title}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
