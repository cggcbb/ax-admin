import { toggleFullscreen } from '~/composables'

interface IActionsEmit {
  handleSearchClick: () => void
  handleFullscreenClick: () => void
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
  const handleFullscreenClick = (): void => {
    toggleFullscreen()
  }
  const handleSettingClick = () => {
    setting.value.openDrawer()
  }

  return {
    handleSearchClick,
    handleRefreshClick,
    handleFullscreenClick,
    handleSettingClick
  } as IActionsEmit
}
