<template>
  <section class="china-map-wrapper">
    <vue-echarts :options="options" />
  </section>
</template>

<script lang="ts" setup>
import useChinaMap from './useChinaMap'

const options = $ref({})

useChinaMap($$(options))
</script>

<script lang="ts">
export default {
  name: 'ChinaMapChart'
}
</script>

<style lang="less" scoped>
.china-map-wrapper {
  width: 100%;
  height: 520px;
}
</style>
