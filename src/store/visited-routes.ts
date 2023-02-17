import { RouteRecordRaw } from 'vue-router'
import useCacheRoutes from './cache-routes'

const useVisitedRoutes = defineStore('visited-routes', () => {
  const visitedRoutes = $ref<RouteRecordRaw[]>([])

  const cacheRoutes = useCacheRoutes()

  const addVisitedRoutes = (route: RouteRecordRaw) => {
    if (!visitedRoutes.find(item => item.name === route.name)) {
      visitedRoutes.push(route)
    }
    if (route.name) {
      cacheRoutes.addCacheRouteName(route)
    }
  }

  return {
    visitedRoutes,
    addVisitedRoutes
  }
})

export default useVisitedRoutes
