"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
export default function InputSearch() {
   const searchRef = useRef()
   const router = useRouter()
   const handleSearch = (e) => {
     const keyword = searchRef.current.value
     if(!keyword || keyword.trim() === "") return;

     if(e.key === "Enter" || e.type === "click"){
       e.preventDefault()
       router.push(`/search/${keyword}`)
       searchRef.current.value = ''
     }
   }
   return (
    <div className="relative">
     <input
          placeholder="Search anime..."
          className={`p-2 w-full rounded text-black border border-color-dark outline-none`}
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} color="black"  />
       </button>
    </div>
   )
}