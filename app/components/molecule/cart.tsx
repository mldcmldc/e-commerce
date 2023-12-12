"use client"

import { IS_CONNECTED_TO_DB } from "@/app/config/connection"
import { useCart } from "@/app/hooks/useCart"
import { CartItem } from "@/app/types/cart"
import { useState } from "react"

function Cart() {
  const {
    getCart: { data: cartItems = [] }
  } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const cartFromLocal =
    typeof window !== "undefined" ? localStorage.getItem("cartItems") : null

  const _cartItems: CartItem[] = IS_CONNECTED_TO_DB
    ? cartItems
    : cartFromLocal
      ? JSON.parse(cartFromLocal)
      : []

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(prevState => !prevState)}>Cart</button>

      {isOpen ? (
        <div className="absolute -right-2 z-50 flex flex-col bg-white mt-4 w-64 h-96 p-5 border border-black">
          <div className="flex flex-col gap-y-5 h-72 overflow-y-auto">
            {_cartItems.length > 0 ? (
              _cartItems.map(item => (
                <div className="flex space-x-4" key={item.id}>
                  <div className="h-20 w-20 border border-black" />
                  <div className="flex flex-col justify-center">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                    <p className="text-sm">Price: ${item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="flex justify-center items-center h-full">
                Cart is empty
              </p>
            )}
          </div>

          {_cartItems.length > 0 && (
            <button className="text-center mt-auto py-2 border border-black">
              View My Cart
            </button>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Cart
