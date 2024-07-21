import Link from "next/link";
import InputSearch from "./InputSearch";

function Navbar() {
  return (
    <header className="bg-pink-800 backdrop-blur-md p-4 shadow-xl sticky">
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <Link href="/" className={`font-bold text-2xl text-color-primary`}>
          孤独の影
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}

export default Navbar;
