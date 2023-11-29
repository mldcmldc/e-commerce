"use client"
import Cart from "../molecule/cart";
import Link from "next/link";

function Navbar() {
  return <div className="w-full flex justify-center items-center p-5 border border-black">
    <div className="flex justify-start items-center flex-1">
      <Link href="/">Home</Link>
    </div>
    <p>
      Navbar
    </p>
    <div className="flex justify-end items-center flex-1 space-x-5">
      <Link href="/store">Store</Link>
      <Cart />
    </div>
  </div>
}

export default Navbar;
