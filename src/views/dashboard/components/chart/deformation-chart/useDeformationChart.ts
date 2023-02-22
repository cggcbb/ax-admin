import { GET_CHINA_MAP_FEATURE_COLLECTION, GET_DEFORMATION_DATA } from '~/api/url'
import * as echarts from 'echarts'
import { get } from '~/utils/http'

interface IDeformationData {
  name: string
  value: number
}

export default function useDeformationChart(options: any) {
  const registerMap = async () => {
    const res = await get<unknown>(GET_CHINA_MAP_FEATURE_COLLECTION)
    echarts.registerMap('china', res.data as any)
  }

  let deformationData: IDeformationData[] = []

  const normalizeDeformationData = async () => {
    const res = await get<unknown>(GET_DEFORMATION_DATA)
    deformationData = res.data as any
    deformationData!.sort((a, b) => {
      return a.value - b.value
    })
    const name = deformationData.map(item => item.name)
    const value = deformationData.map(item => item.value)

    barOption.yAxis.data = name
    barOption.series.data = value
    lineOption.xAxis.data = name
    lineOption.yAxis.data = value
    lineOption.series.data = value
    mapOption.series[0].data = [...deformationData]
  }

  let currIndex = 0

  const baseOption = {
    grid: {
      top: '7%',
      bottom: '10%'
    },
    tooltip: {}
  }

  const mapOption = {
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    visualMap: {
      bottom: '10%',
      right: '5%',
      min: 2000,
      max: 10000,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      },
      text: ['高', '低'],
      calculable: true
    },
    series: [
      {
        id: 'sales',
        type: 'map',
        map: 'china',
        animationDurationUpdate: 1000,
        universalTransition: true,
        data: [] as IDeformationData[]
      }
    ]
  }

  const barOption = Object.assign({}, baseOption, {
    xAxis: {
      show: true,
      type: 'value',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      show: true,
      type: 'category',
      data: [] as string[]
    },
    series: {
      type: 'bar',
      id: 'sales',
      data: [] as number[],
      universalTransition: true,
      animationDurationUpdate: 1000
    }
  })

  const lineOption = Object.assign({}, baseOption, {
    xAxis: {
      show: true,
      type: 'category',
      splitLine: {
        show: false
      },
      data: [] as string[]
    },
    yAxis: {
      show: true,
      type: 'value',
      axisLine: {
        show: true
      },
      data: [] as number[]
    },
    series: {
      type: 'line',
      id: 'sales',
      data: [] as number[],
      universalTransition: true,
      animationDurationUpdate: 1000
    }
  })

  const update = () => {
    options.value = currIndex === 0 ? mapOption : currIndex === 1 ? barOption : lineOption
    currIndex = (currIndex + 1) % 3
  }

  onMounted(async () => {
    await registerMap()
    await normalizeDeformationData()
    update()

    setInterval(update, 3000)
  })
}
