"use client"

import { usePathname, useRouter } from "next/navigation"
import ProductCard from "../components/molecule/product-card"
import { randomNumber } from "../utils/random"

function Page({ searchParams }) {
  const pathname = usePathname()
  const router = useRouter()

  function addQueryParam({ key, value }: { key: string; value: string }) {
    const urlSearchParams = new URLSearchParams(searchParams)

    if (!urlSearchParams.has(key)) {
      urlSearchParams.append(key, value)
    }

    router.push(`${pathname}?${urlSearchParams}`)
  }

  return (
    <div>
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
              className="text-left"
              onClick={() => addQueryParam({ key: "category", value: "test" })}
            >
              Category 1
            </button>
            <button
              className="text-left"
              onClick={() => addQueryParam({ key: "category2", value: "test" })}
            >
              Category 2
            </button>
            <button
              className="text-left"
              onClick={() => addQueryParam({ key: "category3", value: "test" })}
            >
              Category 3
            </button>
            <button
              className="text-left"
              onClick={() => addQueryParam({ key: "category4", value: "test" })}
            >
              Category 4
            </button>
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
    </div>
  )
}

export default Page
