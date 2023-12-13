"use client"

import { useParams, usePathname } from "next/navigation"
import ProductCard from "../components/molecule/product-card"
import { randomNumber } from "../utils/random"

function StorePage({ searchParams }) {
  const params = useParams()
  const pathname = usePathname()

  console.log(params)

  function addQueryParam({ key, value }: { key: string; value: string }) {
    const url = new URL(`${pathname}?${searchParams}`)
    const urlSearchParams = new URLSearchParams(`${pathname}?${searchParams}`)

    urlSearchParams.append(key, value)

    console.log(url)
    console.log(urlSearchParams)
    console.log("hehe")
  }

  return (
    <>
      <div className="py-5">Store</div>
      <div className="flex flex-col min-h-screen h-full w-full gap-y-5">
        <input
          type="text"
          className="border border-black w-full p-5 h-full"
          placeholder="Search products"
        />
        <div className="flex w-full flex-1 gap-x-5">
          <div className="flex flex-col min-w-[150px] border border-black p-5">
            <div className="mb-5">Filters</div>
            <button
              onClick={() => addQueryParam({ key: "category", value: "test" })}
            >
              Category 1
            </button>
            <button>Category 2</button>
            <button>Category 3</button>
            <button>Category 4</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-5 flex-1">
            {[...Array(10).keys()].map((_, idx) => {
              const price = randomNumber()
              const id = randomNumber()

              return (
                <ProductCard
                  key={idx}
                  price={price}
                  id={id}
                  name={`Prod ${idx + 1}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default StorePage
