import { ComputedRef, Ref } from "vue"
import { GET_NOTIFICATION_LIST } from "~/api/url"
import { INotificationItem, Result } from "~/types/common"
import http from "~/utils/http"

interface INotificationUse {
  notificationList: Ref<INotificationItem[]>
  badgeValue: ComputedRef<number>,
  handleClickIcon: () => void
  handleReadAll: (isReadAll?: boolean) => void
}

export default function useNotification() {

  const message = useMessage()
  const notificationList = ref<INotificationItem[]>([])

  const badgeValue = computed(() => {
    return notificationList.value.reduce((t, c) => c.selected ? t : t += 1, 0)
  })

  const handleClickIcon = (item: INotificationItem) => {
    item.selected = !item.selected
  }

  const handleReadAll = (isReadAll = true) => {
    notificationList.value.forEach(item => {
      item.selected = isReadAll
    })
    message.success(`已全部标记为：${isReadAll ? '已读' : '未读'}`)
  }

  const getNotificationList = async () => {
    const res = await http.get<null, Result<INotificationItem[]>>(GET_NOTIFICATION_LIST)

    notificationList.value = res.data
  }

  onMounted(async () => {
    await getNotificationList()
  })

  return {
    badgeValue,
    notificationList,
    handleClickIcon,
    handleReadAll
  } as INotificationUse
}
