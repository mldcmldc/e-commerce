import { randomNumber } from "./random"

export function createCartItem() {
  const cartItemObj = {
    id: randomNumber(),
    quantity: 1,
    name: `Product ${randomNumber()}`,
    price: randomNumber()
  }

  return cartItemObj
}
