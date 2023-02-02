<template>
  <div class="vue-echarts" ref="vueEcharts"></div>
</template>

<script lang="ts" setup>
import { EChartsOption } from 'echarts'
import useEcharts from './useEcharts'

const vueEcharts = ref<HTMLElement | null>(null)

const props = defineProps<{
  options: EChartsOption,
  theme?: [String, Object]
}>()

useEcharts(props, vueEcharts)
</script>

<style lang="less" scoped>
.vue-echarts {
  width: 100%;
  height: 100%;
}
</style>
