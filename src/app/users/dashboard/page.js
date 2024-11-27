import getSession from "@/libs/users";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await getSession();

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="flex flex-col items-center justify-center py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center leading-relaxed">
          Welcome to the Anime World,{" "}
          <span className="text-indigo-400 capitalize">{user.name} 👋</span>
        </h1>
        <p className="text-gray-300 text-center max-w-lg">
          Discover your favorite anime, build your collections, and connect with
          other anime enthusiasts! Let's make your anime journey unforgettable.
        </p>

        <div className="relative group w-56 h-56">
          <Image
            src={user.image}
            alt="user"
            width={224}
            height={224}
            className="rounded-full shadow-xl transition-transform duration-300 group-hover:scale-110"
            quality={100}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
            <p className="mb-4 text-sm text-gray-300">🌟 {user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
