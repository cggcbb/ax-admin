<template>
  <section>
    <vue-echarts :options="options" />
  </section>
</template>

<script lang="ts" setup>
import { graphic, EChartsOption } from 'echarts'
import { randomNumber } from '~/utils'

let options: any = $ref<EChartsOption>({})

const updateChart = () => {
  options = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#999',
        },
      },
    },
    xAxis: {
      type: 'category',
    },
    grid: {
      x: '-10%',
      y: 0,
      x2: '-10%',
      y2: 0,
    },
    yAxis: [
      {
        type: 'value',
        splitLine: { show: false },
      },
    ],
    series: [
      {
        data: generateOrderChartData(),
        type: 'line',
        // 线宽 0, 这里只显示区域
        lineStyle: {
          width: 0,
        },
        // tooltip hover 的时候显示。
        showSymbol: false,
        // 显示成区域面积图
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(19, 160, 231, 1)',
            },
            {
              offset: 1,
              color: 'rgba(12, 200, 109, 1)',
            },
          ]),
          shadowOffsetY: 3,
          shadowColor: "rgba(112, 192, 232, 1)",
        },
        smooth: true
      },
    ],
  }
}

// 随机生成数据
const generateOrderChartData = () => {
  return Array(randomNumber(6, 15)).fill(0).map(v => randomNumber(50, 200))
}

let timer: any = null
onMounted(() => {
  updateChart()


  timer = setInterval(() => {
    updateChart()
  }, 3000)
})

onBeforeMount(() => {
  timer && clearInterval(timer)
})
</script>

<style lang="less" scoped>
section {
  height: 100%;
}
</style>
