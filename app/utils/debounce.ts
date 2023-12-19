export function debounce(fn: () => void, delay: number = 1000) {
  let timer
  let shouldDebounce

  return (...args: any[]) => {
    if (!shouldDebounce) {
      shouldDebounce = true
      fn(...args)

      return
    }

    clearTimeout(timer)
    timer = setTimeout(() => {
      shouldDebounce = false
      fn(...args)
    }, delay)
  }
}
