"use client"

import { useContext } from "react"
import { useCart } from "../../hooks/useCart"
import { PopUpContext } from "@/app/context/pop-up"
import { TOAST_MESSAGE } from "@/app/constants/toast-message"
import Error from "next/error"

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
    const cartItemObj = {
      id: randomNumber(),
      quantity: 1,
      name: `Product ${randomNumber()}`,
      price: randomNumber()
    }

    try {
      addToCart(cartItemObj)

      const cartItemsFromLocal = localStorage.getItem("cartItems")

      if (cartItemsFromLocal) {
        const _cartFromLocal = JSON.parse(cartItemsFromLocal)
        _cartFromLocal.push(cartItemObj)

        localStorage.setItem("cartItems", JSON.stringify(_cartFromLocal))
      } else {
        const cart = [];
        cart.push(cartItemObj);
        localStorage.setItem("cartItems", JSON.stringify(cart))
      }

      popUpContext?.displayToast(TOAST_MESSAGE.SUCCESS_CART)
    } catch (error) {
      popUpContext?.displayToast(TOAST_MESSAGE.ERROR_CART)
    }
  }

  return (
    <div className="flex flex-col py-2">
      <div className="w-full h-40 flex justify-center items-center border border-black">
        {name}
      </div>
      <button
        className="mt-2 border border-black px-4 py-2"
        onClick={_addToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
