import { RouteRecordRaw } from 'vue-router'
import useCacheRoutes from './cache-routes'

const useVisitedRoutes = defineStore('visited-routes', () => {
  const visitedRoutes = $ref<RouteRecordRaw[]>([])

  const { addCacheRouteName, removeCacheRouteName } = useCacheRoutes()

  // 记录当前删除的路由下标
  let markRemoveIndex = $ref(0)

  const addVisitedRoute = (r: RouteRecordRaw): void => {
    if (!visitedRoutes.find(item => item.name === r.name) && !r.meta?.hidden) {
      visitedRoutes.push(r)
      addCacheRouteName(r)
    }
  }

  const removeVisitedRoute = (r: RouteRecordRaw, currentPath: string): Promise<string> => {
    return new Promise(resolve => {
      const index = (markRemoveIndex = visitedRoutes.findIndex(item => item.name === r.name))
      if (index) {
        visitedRoutes.splice(index, 1)
        removeCacheRouteName(r)
      }
      // TODO 暂时假定首页不能删
      // 如果删除的是当前路由，返回相邻的，前面一个路由
      // 否则返回当前路由
      resolve(
        r.path === currentPath ? visitedRoutes[markRemoveIndex - 1]?.path ?? '/' : currentPath
      )
    })
  }

  return {
    visitedRoutes,
    addVisitedRoute,
    removeVisitedRoute
  }
})

export default useVisitedRoutes
