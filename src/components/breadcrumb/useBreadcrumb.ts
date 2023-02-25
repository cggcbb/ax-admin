import { RouteLocationMatched } from 'vue-router'
import { IBreadcrumb } from '~/types/common'

export default function useBreadcrumb() {
  const route = useRoute()
  const router = useRouter()
  let breadcrumbList = $ref<IBreadcrumb[]>([])

  const generateBreadcrumb = (matched: RouteLocationMatched[]) => {
    function normalizeBreadcrumb(rList: RouteLocationMatched[]): IBreadcrumb[] {
      return rList.map(({ ...item }: any) => {
        if (item.children) {
          item.children = normalizeBreadcrumb([...item.children])
        }
        return {
          label: item.meta?.title ?? item.name,
          key: item.name,
          path: item.path,
          children: item.children
        } as IBreadcrumb
      })
    }

    const normalizedBreadcrumb = normalizeBreadcrumb(matched)

    // 如果不是首页，最前面添加一个
    if (!isDashboard(normalizedBreadcrumb[0])) {
      normalizedBreadcrumb.unshift({
        label: '首页',
        key: 'dashboard',
        path: '/dashboard/'
      })
    }

    // 如果只有一个子菜单，单独显示
    return normalizedBreadcrumb.filter(item => !item.children?.length || item.children.length > 1)
  }

  const isDashboard = (r: IBreadcrumb | undefined) => {
    return r?.key === 'dashboard'
  }

  const handleBreadcrumbSelect = (path: string) => {
    router.push({
      path
    })
  }

  watchPostEffect(() => {
    // 切换
    breadcrumbList = generateBreadcrumb(route.matched)
  })

  return $$({
    breadcrumbList,
    handleBreadcrumbSelect
  })
}
