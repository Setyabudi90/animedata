import Link from "next/link";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });
export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className={`flex p-4 justify-between ${gabarito.className} mt-4`}>
      <h1 className="font-bold text-2xl text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all text-color-primary"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
