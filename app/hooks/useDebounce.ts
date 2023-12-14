import { useEffect } from "react"

export function useDebounce(fn: () => void, delay: number = 1500) {
  // wait for n-time before executing the function

  useEffect(() => {
    const timeout = setTimeout(() => {
      fn()
    }, delay)

    return () => clearTimeout(timeout)
  }, [fn])
}
