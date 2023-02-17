import { RouteRecordRaw } from 'vue-router'
import useVisitedRoutes from '~/store/visited-routes'
import setting from '~/setting'
import router from '../'

export default function useVisitedGuard() {
  const { addVisitedRoutes } = useVisitedRoutes()
  let toRoute = $ref<RouteRecordRaw | null>(null)
  const title = $computed(() => `${setting.projectName} | ${toRoute?.meta?.title || '烟花易冷'}`)

  router.beforeEach(to => {
    const route = (toRoute = to as any as RouteRecordRaw)
    addVisitedRoutes(route)

    // @vueuse/core, 修改标签页标题
    useTitle(title)
  })
}
