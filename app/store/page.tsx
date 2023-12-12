import ProductCard from "../components/molecule/product-card"
import { randomNumber } from "../utils/random"

function StorePage() {
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
            <div>Filter 1</div>
            <div>Filter 2</div>
            <div>Filter 3</div>
            <div>Filter 4</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 content-between flex-1">
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
