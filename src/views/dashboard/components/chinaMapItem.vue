<template>
  <n-card :content-style="{ padding: '10px' }" :header-style="{ padding: '10px' }" :segmented="true">
    <template #header>
      <n-skeleton text style="width: 50%" v-if="loading" />
      <template v-else>
        <div text-4> 销售地区分布图（不是一个好的设计师，颜色搭配总是差点意思） </div>
      </template>
    </template>
    <div>
      <n-skeleton text v-if="loading" :repeat="16" />
      <template v-else>
        <china-map-chart></china-map-chart>
      </template>
    </div>
  </n-card>
</template>

<script setup lang="ts">
let loading = $ref(true)

setTimeout(() => {
  loading = false
}, 1000)
</script>

<style lang="less" scoped>

</style>
