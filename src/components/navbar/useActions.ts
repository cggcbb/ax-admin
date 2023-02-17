import { toggleFullscreen } from '~/composables'

interface IActionsEmit {
  handleSearchClick: () => void
  handleFullScreenClick: () => void
  handleSettingClick: () => void
  handleRefreshClick: () => void
}

export default function useActions(setting: any, searchRef: any) {
  const router = useRouter()
  const route = useRoute()

  const handleSearchClick = () => {
    searchRef.value.handleOpen()
  }
  const handleRefreshClick = () => {
    router.replace({ path: `/redirect${route.path}` })
  }
  const handleFullScreenClick = (): void => {
    toggleFullscreen()
  }
  const handleSettingClick = () => {
    setting.value.openDrawer()
  }

  return {
    handleSearchClick,
    handleRefreshClick,
    handleFullScreenClick,
    handleSettingClick
  } as IActionsEmit
}
