"use client"

import { useCart } from "../../hooks/useCart"

type ProductCardProps = {
  name: string
}

function ProductCard(props: ProductCardProps) {
  const { name } = props

  const {
    addCart: { mutate: addToCart }
  } = useCart()

  return (
    <div className="flex flex-col py-2">
      <div className="w-full h-40 flex justify-center items-center border border-black">
        {name}
      </div>
      <button
        className="border border-black px-4 py-2"
        onClick={() =>
          addToCart({ id: Math.ceil(Math.random() * 1000), quantity: 1 })
        }
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
