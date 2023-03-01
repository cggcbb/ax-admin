<template>
  <n-card
    :content-style="{ padding: '10px' }"
    :header-style="{ padding: '5px 10px' }"
    :segmented="true"
    :bordered="false"
  >
    <template #header>
      <n-skeleton text v-if="loading" />
      <template v-else>
        <gradient-text font-size-9>瑶，是不是有两只鹿耳朵？</gradient-text>
      </template>
    </template>
    <template #default>
      <n-skeleton text v-if="loading" :repeat="16" />
      <template v-else>
        <deformation-chart></deformation-chart>
      </template>
    </template>
  </n-card>
</template>

<script lang="ts">
defineComponent({
  name: 'DeformationChartItem'
})
</script>

<script setup lang="ts">
let loading = $ref(true)

setTimeout(() => {
  loading = false
}, 1000)
</script>

<style lang="less" scoped></style>
