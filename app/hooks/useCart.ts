"use client"

import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { CartService } from "../services/cart"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export function useCart() {
  const queryClient = useQueryClient()

  const getCart = useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: CartService.getCart
  })

  const addCart = useMutation({
    mutationFn: CartService.addCart,
    onSuccess: async () => {
      console.log("on success")
      queryClient.invalidateQueries("cart")
    },
    onError: () => console.log("add cart error")
  })

  const removeCart = useMutation({
    mutationFn: CartService.removeCart,
    onSuccess: async () => {
      console.log("on success")
      queryClient.invalidateQueries("cart")
    },
    onError: () => console.log("remove cart error")
  })

  const editCart = useMutation({
    mutationFn: CartService.editCart,
    onSuccess: async () => {
      console.log("on success")
      queryClient.invalidateQueries("cart")
    },
    onError: () => console.log("edit cart error")
  })

  return { getCart, removeCart, addCart, editCart }
}
