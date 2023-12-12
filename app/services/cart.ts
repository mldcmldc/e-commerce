import { CartItem } from "../types/cart"

const cart: CartItem[] = []

export const CartService = {
  getCart: () => {
    return cart
  },
  addCart: (obj: Omit<CartItem, "quantity">) => {
    // fetch by id
    cart.push(obj)
  },
  removeCart: (id: number) => {
    // remove by id
    cart.filter(item => item.id == id)
  },
  editCart: ({ id, quantity }: { id: number; quantity: number }) => {
    // edit cart item by id
    const cartItem = cart.find(item => item.id == id)

    if (cartItem) {
      cartItem.quantity = quantity
      console.log("edited cart")
    }
  }
}
