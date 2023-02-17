import { RouteRecordRaw } from 'vue-router'
import useVisitedRoutes from '~/store/visited-routes'
import setting from '~/setting'
import router from '../'

export default function useVisitedGuard() {
  const { addVisitedRoute } = useVisitedRoutes()
  let toRoute = $ref<RouteRecordRaw | null>(null)

  router.beforeEach(to => {
    const route = (toRoute = to as any as RouteRecordRaw)
    addVisitedRoute(route)

    // @vueuse/core, 修改标签页标题
    useTitle(() => `${setting.projectName} | ${toRoute?.meta?.title || '烟花易冷'}`)
  })
}
