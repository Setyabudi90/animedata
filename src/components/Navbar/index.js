import Link from "next/link";
import InputSearch from "./InputSearch";
import getSession from "@/libs/users";
import { SignOut, UserCircleCheck } from "@phosphor-icons/react/dist/ssr";
import { SignIn } from "@phosphor-icons/react/dist/ssr";

async function Navbar() {
  const user = await getSession();
  return (
    <header className="bg-pink-800 backdrop-blur-md p-4 shadow-xl relative md:static">
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <Link href="/" className={`font-bold text-2xl text-color-primary`}>
          孤独の影
        </Link>
        <InputSearch />
        <div className="absolute md:static right-[10px] top-[5px]">
          {user ? (
            <div className="gap-2 md:gap-4 flex items-center">
              <Link
                href="/users/dashboard"
                className="bg-color-dark text-color-primary p-2 rounded-full md:rounded text-xs font-bold"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                }}
              >
                <UserCircleCheck size={24} />
              </Link>
              <Link
                href="/api/auth/signout"
                className="text-color-primary font-bold"
              >
                <SignOut size={24} />
              </Link>
            </div>
          ) : (
            <Link
              href="/api/auth/signin"
              className="text-color-primary font-bold"
            >
              <SignIn size={24} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
