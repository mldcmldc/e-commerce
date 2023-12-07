type AddCartObj = {
  id: number
  quantity: number
}

const cart = []

export const CartService = {
  getCart: () => {
    return cart
  },
  addCart: (obj: AddCartObj) => {
    // fetch by id
    cart.push(obj)
    console.log("added to cart")
    console.log(cart)
  },
  removeCart: id => {
    // remove by id
    cart.filter(item => item.id == id)
    console.log("removed from cart")
  },
  editCart: ({ id, quantity }) => {
    // edit cart item by id
    const cartItem = cart.find(item => item.id == id)
    cartItem.quantity = quantity

    console.log("edited cart")
  }
}
