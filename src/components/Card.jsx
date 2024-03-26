import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Card(){
  const { data } = useLoaderData();
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
      setLoading(false);
  }, [data])

    return (
        <>
        {loading && <span className="loading loading-dots loading-md"></span>}
         {!loading && 
          data?.map((value) => {
            return (
                <div key={value.id} className="flex">
                  <div className="card w-32 lg:w-60 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={value.pasFoto} width='200' height='200' alt={value.nama} className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-xs lg:text-sm">{value.nama}</h2>
                    <p>{value.namaPartai}</p>
                  </div>
                </div>
              </div>
            )
         })}
        </>
    )
}