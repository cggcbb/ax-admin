<template>
  <section h500px>
    <vue-echarts :options="options" />
  </section>
</template>

<script lang="ts" setup>
import { EChartsCoreOption } from 'echarts';

let options: any = ref<EChartsCoreOption>({})

const data = reactive({
  devices: [
    { value: 1000, name: 'rose 1' },
    { value: 3800, name: 'rose 2' },
    { value: 3200, name: 'rose 3' },
    { value: 3000, name: 'rose 4' },
    { value: 2800, name: 'rose 5' },
    { value: 2600, name: 'rose 6' },
    { value: 2200, name: 'rose 7' },
    { value: 1800, name: 'rose 8' }
  ]
})

const updateChart = () => {
  options.value = {
    tooltip: {},
    series: [
      {
        name: '设备总数',
        type: 'pie',
        data: data.devices,
        roseType: 'area',
        label: {
          fontStyle: 'oblique',
          fontSize: 12,
          formatter: '{b}: {c} ({d}%)'
        },
        emphasis: {
          itemStyle: {
            color: 'rgb(140,251,182)'
          }
        },
        radius: '70%',
      }
    ]
  }
}


let timer: any = null
onMounted(() => {
  updateChart()

  timer = setInterval(() => {
    data.devices.forEach(item => {
      const random = Math.random()
      if (random > 0.2) {
        item.value = item.value + Math.floor(Math.random() * 1000)
      } else {
        item.value = Math.max(0, item.value - Math.floor(Math.random() * 500))
      }
    })
    updateChart()
  }, 3000)
})

onBeforeMount(() => {
  timer && clearInterval(timer)
})
</script>

<style lang="less" scoped>

</style>
