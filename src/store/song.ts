const useSong = defineStore('song', () => {
  const playing = ref(false)
  const volume = ref(100)

  const togglePlay = (play: boolean): void => {
    playing.value = play
  }

  const setVolume = (v: number): void => {
    volume.value = v
  }

  return {
    playing,
    volume,
    togglePlay,
    setVolume
  }
})

export default useSong

