import { RouteRecordRaw } from 'vue-router'

const useCacheRoutes = defineStore('cache-routes', () => {
  // cache name 是给 KeepAlive include 用的，不需要顺序, 用set比较方便
  const cacheRoutesNameSet = $ref<Set<string>>(new Set())

  // KeepAlive include, 需要一个Array
  const cacheRoutesName = $computed(() => [...cacheRoutesNameSet])

  const addCacheRouteName = (r: RouteRecordRaw) => {
    if (r.meta?.cache) {
      const rName = r.name as string
      cacheRoutesNameSet.add(rName)
    }
  }

  const removeCacheRouteName = (r: RouteRecordRaw) => {
    cacheRoutesNameSet.delete(r.name as string)
  }

  return $$({
    cacheRoutesName,
    addCacheRouteName,
    removeCacheRouteName
  })
})

export default useCacheRoutes
