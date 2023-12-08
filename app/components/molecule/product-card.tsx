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

  const randomNumber = () => Math.ceil(Math.random()) * 1000;

  return (
    <div className="flex flex-col py-2">
      <div className="w-full h-40 flex justify-center items-center border border-black">
        {name}
      </div>
      <button
        className="border border-black px-4 py-2"
        onClick={() =>
          addToCart({ id: randomNumber(), quantity: 1, name: `Product ${randomNumber()}`, price: randomNumber() })
        }
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
