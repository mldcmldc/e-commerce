"use client"

import { useContext } from "react"
import { useCart } from "../../hooks/useCart"
import { PopUpContext } from "@/app/context/pop-up"

type ProductCardProps = {
  name: string
}

function ProductCard(props: ProductCardProps) {
  const { name } = props
  const popUpContext = useContext(PopUpContext)

  const {
    addCart: { mutate: addToCart }
  } = useCart()

  const randomNumber = () => Math.ceil(Math.random() * 1000)

  function _addToCart() {
    addToCart({
      id: randomNumber(),
      quantity: 1,
      name: `Product ${randomNumber()}`,
      price: randomNumber()
    })

    popUpContext?.displayToast()
  }

  return (
    <div className="flex flex-col py-2">
      <div className="w-full h-40 flex justify-center items-center border border-black">
        {name}
      </div>
      <button className="border border-black px-4 py-2" onClick={_addToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
