import Link from "next/link";
import Image from "next/image";
export default async function RekomendedAnime({ api }) {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 rounded-md px-2 md:px-3">
      {api.data?.map((anime, index) => {
        return (
          <div key={index} className="relative">
            <Link
              href={`/anime/${btoa(anime.mal_id)}`}
              className={`cursor-pointer hover:text-yellow-400 text-color-primary transition-all`}
            >
              <Image
                src={anime.images.webp.image_url}
                alt={btoa(anime.mal_id)}
                width={350}
                height={350}
                priority={true}
                className="w-full max-h-64 object-cover rounded"
              />
              <p className="p-4 sm:text-xl text-sm absolute bottom-0 left-0 bg-slate-700 w-full opacity-90">
                {anime.title}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
