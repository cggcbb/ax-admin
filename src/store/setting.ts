const useSetting = defineStore('setting', () => {
  const collapsed = ref(false)
  const menuWidth = ref(210)
  const fullscreen = ref(false)

  function setCollapsed(isCollapsed: boolean) {
    collapsed.value = isCollapsed
  }

  function setFullscreen(isScreen: boolean) {
   fullscreen.value = isScreen
  }

  function setMenuWidth(width: number) {
    menuWidth.value = width
  }

  return {
    collapsed,
    menuWidth,
    fullscreen,
    setCollapsed,
    setFullscreen,
    setMenuWidth
  }
})

export default useSetting

