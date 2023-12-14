export function debounce(fn: () => void, delay: number = 1000) {
  let timer

  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

