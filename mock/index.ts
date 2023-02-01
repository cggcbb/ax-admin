function useMock() {
  const modules = import.meta.glob('./**/*.{js,ts}')
  Object.keys(modules).forEach((it) => {
    modules[it]()
  })
}
export default useMock
