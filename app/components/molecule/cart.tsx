"use client"

import { useState } from "react";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="relative">
    <button onClick={() => setIsOpen(prevState => !prevState)}>Cart</button>

    {isOpen ? <div className="absolute -right-2 z-50 flex flex-col bg-white mt-4 w-64 h-96 p-5 border border-black">
      <div className="flex flex-col gap-y-5 h-72 overflow-y-auto">
        <div className="flex space-x-4">
          <div className="h-20 w-20 border border-black" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Product 1</p>
            <p className="text-sm">Price: $5</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="h-20 w-20 border border-black" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Product 1</p>
            <p className="text-sm">Price: $5</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="h-20 w-20 border border-black" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Product 1</p>
            <p className="text-sm">Price: $5</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="h-20 w-20 border border-black" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Product 1</p>
            <p className="text-sm">Price: $5</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="h-20 w-20 border border-black" />
          <div className="flex flex-col justify-center">
            <p className="text-sm">Product 1</p>
            <p className="text-sm">Price: $5</p>
          </div>
        </div>
      </div>
      <button className="text-center mt-auto py-2 border border-black">View My Cart</button>
    </div> : null}
  </div>
}

export default Cart;
