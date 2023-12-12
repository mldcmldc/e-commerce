import { CartItem } from "../types/cart"

const initialCartFromLocal =
  typeof window !== "undefined" && localStorage.getItem("cartItems")
const cartFromLocal: CartItem[] = initialCartFromLocal
  ? JSON.parse(initialCartFromLocal)
  : []

export const LocalCartService = {
  getCart: () => {
    return cartFromLocal
  },
  addCart: (obj: CartItem) => {
    cartFromLocal.push(obj)

    localStorage.setItem("cartItems", JSON.stringify(cartFromLocal))
  },
  removeCart: (id: number) => {
    cartFromLocal.filter(cartItem => cartItem.id != id)

    localStorage.setItem("cartItems", JSON.stringify(cartFromLocal))
  },
  editCart: ({ id }: { id: number }) => {
    const cartItem = cartFromLocal.find(cartItem => cartItem.id == id)

    if (cartItem) {
      cartItem.quantity++

      localStorage.setItem("cartItems", JSON.stringify(cartFromLocal))
    }
  }
}
