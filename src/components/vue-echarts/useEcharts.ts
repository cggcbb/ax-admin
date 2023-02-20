import * as echarts from 'echarts'
import { EChartsType } from 'echarts'
import { debounce } from '~/utils'

export default function useEcharts(props: any, domWrapper: any) {
  let chart = $ref<EChartsType | null>(null)
  const theme = $computed(() => (isDark.value ? 'dark' : 'light'))

  const updateChart = () => {
    if (chart && props.options) {
      nextTick(() => chart!.setOption(props.options, true))
    }
  }

  const handleChartResize = debounce(() => {
    chart?.resize()
  }, 300)

  onMounted(() => {
    window.addEventListener('resize', handleChartResize)
  })

  onBeforeMount(() => {
    window.removeEventListener('resize', handleChartResize)
  })

  watch(() => props.options, updateChart)

  /**
   * 同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。
   * 因此，在大多数情况下，你无需关心怎么停止一个侦听器。
   *
   * 一个关键点是，侦听器必须用同步语句创建：如果用异步回调创建一个侦听器，
   * 那么它不会绑定到当前组件上，你必须手动停止它
   *
   * watchPostEffect => 在dom更新完之后调用
   */
  watchPostEffect(() => {
    // 销毁实例, 避免错误警告：[ECharts] There is a chart instance already initialized on the dom.
    chart?.dispose()

    chart = echarts.init(domWrapper.value as HTMLElement, theme)
  })
}
