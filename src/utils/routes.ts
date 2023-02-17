import { RouteRecordRaw } from 'vue-router'

export const getCacheRoutesName = (rList: RouteRecordRaw[]): string[] => {
  const result: string[] = []

  // 内部方法
  const getRouteName = (
    result: string[],
    rList: RouteRecordRaw[]
  ): string[] => {
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
