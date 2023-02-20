const useSong = defineStore('song', () => {
  let playing = $ref(false)

  const togglePlay = (play: boolean): void => {
    playing = play
  }

  return $$({
    playing,
    togglePlay
  })
})

export default useSong
