import * as Echarts from 'echarts'
import { EChartsType, EChartsCoreOption } from 'echarts'

export interface echartsProps {
  options: EChartsCoreOption
  theme?: string | object
}

export default function useEcharts(props: echartsProps, domWrapper: any) {
  const chart = ref<EChartsType | null>(null)

  const initChart = () => {
    if (!chart.value) {
      chart.value = Echarts.init(domWrapper.value as HTMLElement, props.theme)
    }
    if (props.options) {
      chart.value.setOption(props.options)
    }
  }

  const updateChart = () => {
    if (chart.value && props.options) {
      chart.value.setOption(props.options)
    }
  }

  onMounted(() => {
    initChart()
  })

  watch(
    () => props.options,
    () => {
      updateChart()
    }
  )
}
