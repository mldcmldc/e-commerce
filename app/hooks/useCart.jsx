const {
  useMutation,
  useQueryClient,
  useQuery
} = require("@tanstack/react-query")

function useCart() {
  const queryClient = useQueryClient()

  const getCart = useQuery({
    queryKey: ["cart"],
    queryFn: () => console.log("hello")
  })

  const addCart = useMutation({
    mutationFn: () => console.log("add cart"),
    onSuccess: async () => {
      console.log("on success")
      queryClient.invalidateQueries("cart")
    },
    onError: () => console.log("add cart error")
  })

  const removeCart = useMutation({
    mutationFn: () => console.log("remove cart"),
    onSuccess: async () => {
      console.log("on success")
      queryClient.invalidateQueries("cart")
    },
    onError: () => console.log("remove cart error")
  })

  const editCart = useMutation({
    mutationFn: () => console.log("edit cart"),
    onSuccess: async () => {
      console.log("on success")
      queryClient.invalidateQueries("cart")
    },
    onError: () => console.log("edit cart error")
  })

  return { getCart, removeCart, addCart, editCart }
}

export default useCart
