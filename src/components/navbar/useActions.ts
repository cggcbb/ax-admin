import { toggleFullscreen } from "~/composables"

interface IActionsEmit {
  handleSearchClick: () => void
  handleBellClick: () => void
  handleFullScreenClick: () => void
  handleSettingClick: () => void
}

export default function useActions(setting: any, searchRef: any) {
  const message = useMessage()

  const handleSearchClick = () => {
    searchRef.value.handleOpen()
  }
  const handleBellClick = () => {
    message.success('click bell, do nothing currently')
    console.log('bell click')
  }
  const handleFullScreenClick = (): void => {
    toggleFullscreen()
  }
  const handleSettingClick = () => {
    setting.value.openDrawer()
  }

  return {
    handleSearchClick,
    handleBellClick,
    handleFullScreenClick,
    handleSettingClick
  } as IActionsEmit
}
