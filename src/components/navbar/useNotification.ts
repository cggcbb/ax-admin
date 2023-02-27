import { ComputedRef, Ref } from 'vue'
import { GET_MORE_NOTIFICATION_LIST, GET_NOTIFICATION_LIST } from '~/api/url'
import { INotification, INotificationItem } from '~/types/common'
import { sleep } from '~/utils'
import { get } from '~/utils/http'

interface INotificationUse {
  notificationList: Ref<INotification[]>
  count: ComputedRef<number>
  loading: Ref<boolean>
  handleClickItem: () => void
  handleClear: (index: number) => void
  handleLoadMore: (index: number) => Promise<void>
}

export default function useNotification() {
  const notificationList = ref<INotification[]>([])
  const loading = ref(false)

  const message = useMessage()

  const count = computed(() => {
    return notificationList!.value.reduce((t, c) => {
      return t + c.list.filter(item => !item.isRead).length
    }, 0)
  })

  const handleClickItem = (item: INotificationItem) => {
    item.isRead = !item.isRead
  }

  const handleClear = (index: number) => {
    notificationList.value[index].list = []
  }

  const getNotificationList = async () => {
    const res = await get<INotification[]>(GET_NOTIFICATION_LIST)
    notificationList.value = res.data
  }

  const handleLoadMore = async (index: number) => {
    loading.value = true
    await sleep(1000)
    const res = await get<INotificationItem[]>(GET_MORE_NOTIFICATION_LIST)
    notificationList.value[index].list.push(...res.data)
    loading.value = false
    message.success('获取数据成功')
  }

  onMounted(async () => {
    await getNotificationList()
  })

  return {
    count,
    notificationList,
    loading,
    handleClickItem,
    handleClear,
    handleLoadMore
  } as INotificationUse
}
