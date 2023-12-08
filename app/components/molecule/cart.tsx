"use client"

import { useCart } from "@/app/hooks/useCart"
import { useState } from "react"

function Cart() {
  const {
    getCart: { data: cartItems }
  } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(prevState => !prevState)}>Cart</button>

      {isOpen ? (
        <div className="absolute -right-2 z-50 flex flex-col bg-white mt-4 w-64 h-96 p-5 border border-black">
          <div className="flex flex-col gap-y-5 h-72 overflow-y-auto">
            {cartItems &&
              cartItems.map(item => (
                <div className="flex space-x-4" key={item.id}>
                  <div className="h-20 w-20 border border-black" />
                  <div className="flex flex-col justify-center">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                    <p className="text-sm">Price: {item.price}</p>
                  </div>
                </div>
              ))}
          </div>
          <button className="text-center mt-auto py-2 border border-black">
            View My Cart
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Cart
