"use client"

import { usePathname, useRouter } from "next/navigation"
import ProductCard from "../components/molecule/product-card"
import { useState, useTransition } from "react"
import { productFilters, products } from "../definitions/products"

function Page({ searchParams }) {
  const pathname = usePathname()
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isPending, startTransition] = useTransition()

  function addQueryParam({ key, value }: { key: string; value: string }) {
    const urlSearchParams = new URLSearchParams(searchParams)

    if (!urlSearchParams.has(key)) {
      urlSearchParams.append(key, value)
    } else if(urlSearchParams.get(key) != value){
      urlSearchParams.delete(key)
      urlSearchParams.append(key, value)
    }

    router.push(`${pathname}?${urlSearchParams}`)
  }

  function onSearch(e) {
    const searchInput = e.target.value.trim()
    setSearchValue(searchInput)

    const filteredProducts =
      searchInput != ""
        ? products.filter(product =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : products

    startTransition(() => {
      setFilteredProducts(filteredProducts)
    })
  }

  return (
    <>
      <div className="py-5">Store</div>
      <div className="flex flex-col min-h-screen h-full w-full gap-y-5">
        <input
          type="text"
          className="border border-black w-full p-5 h-full"
          placeholder="Search products"
          onChange={onSearch}
        />
        <div className="flex w-full flex-1 gap-x-5">
          <div className="flex flex-col min-w-[150px] border border-black p-5">
            <div className="mb-5">Filters</div>
            {productFilters.map(filter => (
              <button
                className="text-left"
                key={filter.id}
                onClick={() =>
                  addQueryParam({ key: "category", value: filter.category })
                }
              >
                {filter.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-5 flex-1">
            {filteredProducts.map((product, idx) => (
              <div
                key={idx}
                className={`duration-300 transition-opacity ease-in ${
                  isPending ? "opacity-0" : "opacity-100"
                }`}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
