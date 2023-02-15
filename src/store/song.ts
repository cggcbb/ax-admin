const useSong = defineStore('song', () => {

  const playing = ref(false)

  const togglePlay = (play: boolean): void => {
    playing.value = play
  }

  return {
    playing,
    togglePlay,
  }
})

export default useSong

