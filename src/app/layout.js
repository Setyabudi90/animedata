import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Animehh...",
  description: "Website for anime and manga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
