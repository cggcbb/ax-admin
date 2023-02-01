const useTheme = defineStore({
  id: 'theme',
  state: () => {
    return {
      dark: false
    }
  },
  actions: {
    changeThemeDark(dark: boolean) {
      // this.dark = dark
    }
  }
})

export default useTheme
