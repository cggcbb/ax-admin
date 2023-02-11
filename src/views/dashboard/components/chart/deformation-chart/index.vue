<template>
  <section>
    <vue-echarts :options="options" />
  </section>
</template>

<script lang="ts">
defineComponent({
  name: 'ChinaMapItem'
})
</script>

<script lang="ts" setup>
import useDeformationChart from './useDeformationChart'

let options: any = ref({})

useDeformationChart(options)

</script>

<style lang="less" scoped>
section {
  height: 420px;
}
</style>
