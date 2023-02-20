export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const debounce = (fn: Function, delay: number): any => {
  let timer: any = null
  return function (this: any, ...args: any) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay))

// 交换数组两个下标位置的元素
export const swap = (arr: any, i: number, j: number) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
