<template>
  <n-card :content-style="{ padding: '10px' }" :header-style="{ padding: '5px 10px' }" :segmented="true">
    <template #header>
      <n-skeleton text v-if="loading" />
      <template v-else>
        <n-gradient-text font-size-9 gradient="linear-gradient(90deg, #08d9d6 0%, #3490de 50%, #ff00c1 100%)">
          那天她说 No Problem
        </n-gradient-text>
      </template>
    </template>
    <template #default>
      <n-skeleton text v-if="loading" :repeat="16" />
      <template v-else>
        <china-map-chart></china-map-chart>
      </template>
    </template>
  </n-card>
</template>

<script lang="ts">
defineComponent({
  name: 'ChinaMapItem'
})
</script>

<script setup lang="ts">
let loading = $ref(true)

setTimeout(() => {
  loading = false
}, 1000)
</script>

<style lang="less" scoped>

</style>
