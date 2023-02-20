import { RouteRecordRaw } from 'vue-router'
import { swap } from '.'

export const getCacheRoutesName = (rList: RouteRecordRaw[]): string[] => {
  const result: string[] = []

  // 内部方法
  const getRouteName = (result: string[], rList: RouteRecordRaw[]): string[] => {
    rList.forEach(route => {
      if (route.children) {
        getRouteName(result, route.children)
      }
      route.meta?.cache && result.push(route.name as string)
    })
    return result.filter(Boolean)
  }

  return getRouteName(result, rList)
}

export const swapSpecifiedRouteToFirst = (
  rList: RouteRecordRaw[],
  title: string
): RouteRecordRaw[] => {
  const index = rList.findIndex(item => item.meta?.title === title)

  // -1 -> not found , 0 -> current first
  if (index !== -1 && index !== 0) {
    swap(rList, 0, index)
  }

  return rList
}
