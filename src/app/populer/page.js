"use client";
import AnimeList from "@/components/AnimeList";
import Menu from "@/components/utilities/Menu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { AnimeResponse } from "../../libs/api";

export default function Page() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const anime = await AnimeResponse("top/anime", `page=${page}`);
    setData(anime);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <Menu title={`Terpopuler #${page}`} />
      <AnimeList api={data} />
      <Pagination
        page={page}
        lastPage={data.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}
