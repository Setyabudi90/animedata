import getSession from "@/libs/users";
import Image from "next/image";

export default async function Page() {
  const user = await getSession();
  return (
    <div className="container flex flex-1 flex-col justify-center items-center p-4">
      <h1 className="text-2xl text-color-primary font-bold break-words">
        Welcome to dashboard,{" "}
        <span className="text-indigo-500 text-xl">{user.name}✨</span>
      </h1>
      <div className="details p-3">
        <Image
          src={user.image}
          alt="user"
          width={500}
          height={384}
          className="rounded shadow-sm shadow-[#f4f4f4]"
          quality={100}
        />
        <p className="text-color-primary text-xl text-center">{user.email}</p>
      </div>
    </div>
  );
}
