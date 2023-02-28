import { LogInOutline, PersonOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import useVisitedRoutes from '~/store/visited-routes'
import { sleep } from '~/utils'

export default function useAvatar() {
  const nickName = ref('Mine Mine')

  const options = [
    {
      label: '个人中心',
      key: 'personal-information' as const,
      icon: () =>
        h(
          NIcon,
          {
            size: 20
          },
          {
            default: () => h(PersonOutline)
          }
        )
    },
    {
      label: '退出登录',
      key: 'logout' as const,
      icon: () =>
        h(
          NIcon,
          {
            size: 20
          },
          {
            default: () => h(LogInOutline)
          }
        )
    }
  ]

  const router = useRouter()
  const dialog = useDialog()
  const route = useRoute()
  const { clearVisitedRoute } = useVisitedRoutes()

  const logout = () => {
    const instance = dialog.warning({
      title: '提示',
      content: '确认退出当前账号？',
      positiveText: '退出',
      negativeText: 'No',
      onPositiveClick: () => {
        instance.loading = true
        return new Promise(resolve => {
          sleep(1000).then(() => {
            // TODO logout的一些逻辑
            clearVisitedRoute()
            router.push({
              path: '/login',
              query: {
                redirect: route.fullPath
              }
            })
            resolve(null)
          })
        })
      }
    })
  }

  type selectKeys = (typeof options)[number]['key']

  const handleSelect = (key: selectKeys) => {
    switch (key) {
      case 'personal-information':
        router.push({
          path: '/personal/information'
        })
        break
      case 'logout':
        logout()
        break
      default:
        const n: never = key
        return n
    }
  }

  return {
    nickName,
    options,
    handleSelect
  }
}
