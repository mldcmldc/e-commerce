"use client"

type ProductCardProps = {
  name: string
}

function ProductCard(props: ProductCardProps) {
  const { name } = props

  return (
    <div className="flex flex-col py-2">
      <div className="w-full h-40 flex justify-center items-center border border-black">
        {name}
      </div>
      <button
        className="border border-black px-4 py-2"
        onClick={() => console.log("add")}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
