import { toggleFullscreen } from "~/composables"

interface IActionsEmit {
  handleSearchClick: () => void
  handleBellClick: () => void
  handleFullScreenClick: () => void
  handleSettingClick: () => void
}

export default function useActions() {
  const handleSearchClick = () => {
    console.log('search click')
  }
  const handleBellClick = () => {
    console.log('bell click')
  }
  const handleFullScreenClick = (): void => {
    toggleFullscreen()
  }
  const handleSettingClick = () => {
    console.log('setting click')
  }

  return {
    handleSearchClick,
    handleBellClick,
    handleFullScreenClick,
    handleSettingClick
  } as IActionsEmit
}
