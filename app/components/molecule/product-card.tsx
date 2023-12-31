"use client"

import { useCallback, useContext } from "react"
import { useCart } from "../../hooks/useCart"
import { PopUpContext } from "@/app/context/pop-up"
import { TOAST_MESSAGE } from "@/app/constants/toast-message"
import { IS_CONNECTED_TO_DB } from "@/app/config/connection"
import { LocalCartService } from "@/app/services/cart-local"
import { CartItem } from "@/app/types/cart"
import { debounce } from "@/app/utils/debounce"

type ProductCardProps = {
  id: number
  name: string
  price: number
}

function ProductCard(props: ProductCardProps) {
  const { id, name, price } = props
  const popUpContext = useContext(PopUpContext)

  const {
    addCart: { mutate: addToCart },
    editCart: { mutate: editCart },
    getCart: { data: cartItems }
  } = useCart()

  const {
    addCart: addToLocalCart,
    editCart: editLocalCart,
    getCart
  } = LocalCartService

  const _addToCart = useCallback(
    debounce((cartItem: CartItem) => {
      try {
        if (IS_CONNECTED_TO_DB) {
          const item = cartItems?.find(
            itemFromDb => itemFromDb.id == cartItem.id
          )

          if (item) {
            editCart({ id: item.id, quantity: 1 })
            popUpContext?.displayToast(TOAST_MESSAGE.SUCCESS_UPDATE)
            return
          }

          addToCart(cartItem)
          popUpContext?.displayToast(TOAST_MESSAGE.SUCCESS_CART)
          return
        }

        const item = getCart().find(
          cartItemFromLocal => cartItemFromLocal.id == cartItem.id
        )

        if (item) {
          editLocalCart({ id: item.id })
          popUpContext?.displayToast(TOAST_MESSAGE.SUCCESS_UPDATE)
          return
        }

        addToLocalCart(cartItem)
        popUpContext?.displayToast(TOAST_MESSAGE.SUCCESS_CART)
      } catch (error) {
        popUpContext?.displayToast(TOAST_MESSAGE.ERROR_CART)
      }
    }),
    [cartItems, addToCart, editCart]
  )

  return (
    <div className="flex flex-col py-2">
      <div className="w-full h-full min-h-[250px] flex justify-center items-center border border-black">
        {name}
      </div>
      <button
        className="mt-2 border border-black px-4 py-2"
        onClick={() => _addToCart({ id, name, price, quantity: 1 })}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
