import { toggleFullscreen } from "~/composables"

interface IActionsEmit {
  handleSearchClick: () => void
  handleFullScreenClick: () => void
  handleSettingClick: () => void
}

export default function useActions(setting: any, searchRef: any) {

  const handleSearchClick = () => {
    searchRef.value.handleOpen()
  }
  const handleFullScreenClick = (): void => {
    toggleFullscreen()
  }
  const handleSettingClick = () => {
    setting.value.openDrawer()
  }

  return {
    handleSearchClick,
    handleFullScreenClick,
    handleSettingClick
  } as IActionsEmit
}
