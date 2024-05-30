
export const AnimeResponse = async(resource, query) => {
   let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`)
   const res = await data.json()
   return res
}

export const  NestedAnimeResponse = async(resource, property) => {
    const res = await AnimeResponse(resource)
    return res.data.flatMap(anime => anime[property])
}

export const Converter = (data, distance) => {
   const first = ~~(Math.random() * (data.length - distance) + 1)
   const last = first + distance

   const res = {
      data: data.slice(first, last),
   }
   return res
}