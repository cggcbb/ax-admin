import * as echarts from 'echarts'
import { EChartsType, EChartsCoreOption } from 'echarts'
import { debounce } from '~/utils'

export interface echartsProps {
  options: EChartsCoreOption
  theme?: string | object
}

export default function useEcharts(props: echartsProps, domWrapper: any) {
  let chart = $ref<EChartsType | null>(null)

  const initChart = () => {
    if (!chart) {
      chart = echarts.init(domWrapper.value as HTMLElement, props.theme)
    }
    if (props.options) {
      chart.setOption(props.options)
    }
  }

  const updateChart = () => {
    if (chart && props.options) {
      chart.setOption(props.options)
    }
  }

  const handleChartResize = debounce(() => {
    chart?.resize()
  }, 300)

  onMounted(() => {
    initChart()
    window.addEventListener('resize', handleChartResize)
  })

  onBeforeMount(() => {
    window.removeEventListener('resize', handleChartResize)
  })

  watch(
    () => props.options,
    () => {
      updateChart()
    }
  )
}
