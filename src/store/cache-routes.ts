const useCacheRoutes = defineStore('cache-routes', () => {
  const cacheRoutesName = ref<string[]>([])

  const addCacheRouteName = (rName: string) => {
    if (!cacheRoutesName.value.includes(rName)) {
      cacheRoutesName.value.push(rName)
    }
  }

  return {
    cacheRoutesName,
    addCacheRouteName
  }
})

export default useCacheRoutes
