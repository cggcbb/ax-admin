import { LogInOutline, PersonOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { sleep } from '~/utils'

export default function useAvatar() {
  const nickName = ref('Mine Mine')

  const options = [
    {
      label: '个人中心',
      key: 'personal-center',
      icon: () => h(NIcon, {
        size: 20
      }, {
        default: () => h(PersonOutline)
      })
    },
    {
      label: '退出登录',
      key: 'logout',
      icon: () => h(NIcon, {
        size: 20
      }, {
        default: () => h(LogInOutline),
      })
    },
  ]

  const message = useMessage()
  const router = useRouter()
  const dialog = useDialog()

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
            router.push({
              path: '/login'
            })
            resolve(null)
          })
        })
      }
    })
  }

  const handleSelect = (key: string) => {
    switch (key) {
      case 'personal-center':
        message.warning('click personal center')
        break
      case 'logout':
        logout()
        break
      default:
    }
  }

  return {
    nickName,
    options,
    handleSelect
  }
}
