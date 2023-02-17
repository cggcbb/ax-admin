import { RouteRecordRaw } from 'vue-router'

const useCacheRoutes = defineStore('cache-routes', () => {
  const cacheRoutesName = $ref<string[]>([])

  const addCacheRouteName = (r: RouteRecordRaw) => {
    if (r.meta?.cache) {
      const rName = r.name as string
      if (!cacheRoutesName.includes(rName)) {
        cacheRoutesName.push(rName)
      }
    }
  }

  return {
    cacheRoutesName,
    addCacheRouteName
  }
})

export default useCacheRoutes
