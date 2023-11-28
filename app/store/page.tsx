import ProductCard from "../components/molecule/product-card";

function StorePage() {
  return <>
    <div className="py-5">Store</div>
    <div className="flex flex-col min-h-screen h-full w-full gap-y-5">
      <input type="text" className="border border-black w-full p-5 h-full" placeholder="Search products" />
      <div className="flex w-full flex-1 gap-x-5">
        <div className="flex flex-col min-w-[150px] border border-black p-5">
          <div className="mb-5">Filters</div>
          <div>Store</div>
          <div>Store</div>
          <div>Store</div>
          <div>Store</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 content-between flex-1">
          {
            [...Array(10).keys()].map((_, idx) =>
              <ProductCard key={idx} name={`Prod ${idx + 1}`} />
            )
          }
        </div>
      </div>
    </div>
  </>
}

export default StorePage;
