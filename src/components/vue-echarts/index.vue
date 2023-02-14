<template>
  <div class="vue-echarts" ref="vueEcharts"></div>
</template>

<script lang="ts" setup>

import { EChartsCoreOption } from 'echarts/core'
import useEcharts from './useEcharts'

interface echartsProps {
  options: EChartsCoreOption
  theme?: string | object
}

const props = withDefaults(defineProps<echartsProps>(), {
  options: {} as any,
  theme: 'light',
})

const vueEcharts = ref<HTMLElement | null>(null)

useEcharts(props, vueEcharts)

</script>

<style lang="less" scoped>
.vue-echarts {
  width: 100%;
  height: 100%;
}
</style>
