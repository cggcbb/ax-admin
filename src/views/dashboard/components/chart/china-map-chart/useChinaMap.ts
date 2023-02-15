
import * as echarts from 'echarts'
import { get } from '~/utils/http'
import { GET_CHINA_MAP_DATA, GET_CHINA_MAP_FEATURE_COLLECTION } from '~/api/url'

export default function useChinaMap(options: any) {
  /**
   * 区分白色背景和黑色背景
   */
  // 文字颜色
  const textColor = $computed(() => isDark.value ? '#fff' : '#1f2225')
  // timeline颜色
  const progressColor = $computed(() => isDark.value ? '#93ebf8' : '#199fb7')
  // 地图区域边框色
  const mapBorderColor = $computed(() => isDark.value ? '#93ebf8' : 'rgba(0, 0, 0, .1)')
  // 阴影颜色
  const mapShadowColor = $computed(() => isDark.value ? '#7fd9f8' : 'rgba(0, 0, 0, .3)')
  // map背景渐变色
  const gradientColor = $computed(() => isDark.value ? ['rgba(147, 235, 248, 0)', 'rgba(147, 235, 248, .2)'] : ['rgba(96, 217, 234, .31)', 'rgba(255, 255, 255, .3)'])
  // hover时的背景色
  const mapAreaColor = $computed(() => isDark.value ? '#389bb7' : 'rgba(56, 155, 183, .5)')
  // 切换每项的颜色
  const colors = $computed(() => isDark.value ? [['#04b9ff', '#e690d1', '#ffdb5c', '#1de9b6', '#ea7e53', '#e062ae']] : [['#199fb7', '#ff668f', '#d38f45', '#0092f4', '#3eaa77', '#626262']])

  const REGISTER_MAP_NAME = 'china'

  const registerMap = async () => {
    const res = await get<unknown>(GET_CHINA_MAP_FEATURE_COLLECTION)
    echarts.registerMap(REGISTER_MAP_NAME, res.data as any)
  }

  const update = async () => {
    const chinaMapData = await get<unknown>(GET_CHINA_MAP_DATA)
    const {
      geoGpsMap,
      geoCoordMap,
      d1,
      d2,
      d3,
      d4,
      d5,
      d6,
      cities
    } = chinaMapData.data as any

    const colorIndex = 0
    const mapData = [[], [], [], [], [], []] as any
    const categoryData = [] as any
    const barData = [] as any
    for (let key in geoCoordMap) {
      mapData[0].push({
        city: cities[0],
        name: key,
        value: d1[key] / 100,
        value1: d1[key] / 100
      })
      mapData[1].push({
        city: cities[1],
        name: key,
        value: d2[key] / 100,
        value1: d2[key] / 100
      })
      mapData[2].push({
        city: cities[2],
        name: key,
        value: d3[key] / 100,
        value1: d3[key] / 100
      })
      mapData[3].push({
        city: cities[3],
        name: key,
        value: d4[key] / 100,
        value1: d4[key] / 100
      })
      mapData[4].push({
        city: cities[4],
        name: key,
        value: d5[key] / 100,
        value1: d5[key] / 100
      })
      mapData[5].push({
        city: cities[5],
        name: key,
        value: d6[key] / 100,
        value1: d6[key] / 100
      })
    }
    for (let i = 0; i < mapData.length; i++) {
      mapData[i].sort((a: any, b: any) => {
        return a.value - b.value
      })
      barData.push([])
      categoryData.push([])
      for (let j = 0; j < mapData[i].length; j++) {
        barData[i].push(mapData[i][j].value1)
        categoryData[i].push(mapData[i][j].name)
      }
    }
    const convertData = (data: any) => {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }
    const convertToLineData = (data: any, gps: any) => {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const dataItem = data[i]
        const toCoord = geoCoordMap[dataItem.name]
        const fromCoord = gps
        if (fromCoord && toCoord) {
          res.push([
            fromCoord, toCoord
          ])
        }
      }
      return res
    }

    const _option = {
      timeline: {
        data: cities,
        axisType: 'category',
        autoPlay: true,
        playInterval: 6000,
        label: {
          color: textColor,
          fontSize: 12
        },
        itemStyle: {
          color: textColor
        },
        lineStyle: {
          color: textColor
        },
        checkpointStyle: {
          borderWidth: 0,
          color: progressColor,
          symbolSize: 16
        },
        controlStyle: {
          showNextBtn: true,
          showPreBtn: true,
          color: textColor,
          borderColor: textColor,
          itemSize: 20,
          opacity: .8
        },
        progress: {
          label: {
            color: progressColor,
          },
          itemStyle: {
            color: progressColor,
          },
          lineStyle: {
            color: progressColor,
          },
        },
        emphasis: {
          label: {
            color: progressColor,
            borderColor: progressColor,
          },
          itemStyle: {
            color: progressColor,
            borderColor: progressColor,
          },
          checkpointStyle: {
            color: progressColor,
            borderColor: progressColor,
          },
          controlStyle: {
            color: progressColor,
            borderColor: progressColor,
          }
        },
        left: '8%',
        bottom: 0,
        width: '80%'
      },
      baseOption: {
        grid: {
          right: '5%',
          top: '10%',
          bottom: '12%',
          width: '20%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: 'rgba(150, 150, 150, 0.1)'
            },
          }
        },
        geo: {
          map: REGISTER_MAP_NAME,
          zoom: 1.1,
          // 是否允许拖动，缩放
          // roam: true,
          center: [115.28, 34.41],
          itemStyle: {
            borderColor: mapBorderColor,
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: gradientColor[0]
                },
                {
                  offset: 1,
                  color: gradientColor[1]
                }
              ]
            },
            shadowColor: mapShadowColor,
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10,
          },
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              areaColor: mapAreaColor,
            }
          },
          // 滚轮缩放的极限控制
          // scaleLimit: {
          //   min: 0.8,
          //   max: 1
          // }
        },
      },

      options: [] as any
    }

    for (let i = 0; i < cities.length; i++) {
      _option.options.push({
        title: [
          {
            text: '看起来像一个中国地图',
            subtext: '颜色搭配总差点意思',
            left: '2%',
            top: '2%',
            textStyle: {
              color: textColor,
              fontSize: 14,
            },
            subtextStyle: {
              fontSize: 12
            }
          },
          {
            id: 'statistic',
            // text: `${cities[i]}销售额统计情况`,
            text: '不知道这条形图有什么用',
            right: '10%',
            top: '1%',
            textStyle: {
              color: colors[colorIndex][i],
              fontSize: 14
            }
          }
        ],
        xAxis: {
          type: 'value',
          position: 'top',
          min: 0,
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 2,
            color: colors[colorIndex][i]
          }
        },
        yAxis: {
          type: 'category',
          data: categoryData[i],
          axisLine: {
            lineStyle: {
              color: colors[colorIndex][i]
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            color: colors[colorIndex][i]
          }
        },
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(mapData[i]),
            symbolSize: function (val: any) {
              return val[2] / 10
            },
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              show: true,
              position: 'right',
              color: colors[colorIndex][i],
              formatter: (params: any) => {
                return params.data.name
              }
            },
            itemStyle: {
              color: colors[colorIndex][i],
              shadowColor: colors[colorIndex][i],
              shadowBlur: 10
            },
            zlevel: 1
          },
          {
            type: 'lines',
            data: convertToLineData(mapData[i], geoGpsMap[i + 1]),
            effect: {
              show: true,
              symbol: 'arrow',
              trailLength: 0.1
            },
            lineStyle: {
              color: colors[colorIndex][i],
              width: 0.1,
              opacity: 0.5,
              // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。
              curveness: 0.3
            },
            zlevel: 2
          },
          {
            type: 'bar',
            data: barData[i],
            itemStyle: {
              color: colors[colorIndex][i]
            }
          },
        ]
      })
    }
    options.value = _option
  }

  watch(isDark, () => nextTick(async () => await update()))

  onMounted(async () => {
    await registerMap()
    await update()
  })
}

