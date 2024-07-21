import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Animeh - Lihat dan cari anime favoritmu dengan mudah",
  description: "Animeh adalah popular anime database, cari anime dengan mudah, cepat dan aman tanpa gangguan iklan.", 
  keywords: [
    "anime",
    "database",
    "app",
    "animelist",
    "animehh",
  ],
  author: "ISB",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Animeh - Lihat dan cari anime favorimu dengan mudah", 
    image: "https://i.ibb.co.com/Sn7b3YN/dashboard-profile-logo-transformed.jpg", 
    type: "website",
    url: "https://animedata.vercel.app", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
    <GoogleTagManager gtmId="GTM-W4GRZ8HG" />
      <body className={`${poppins.className} bg-slate-900`} suppressHydrationWarning={true}>
      {/* Start Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4GRZ8HG"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
            title="noscript"
          ></iframe>
        </noscript>
        {/* end Google Tag Manager (noscript) */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
