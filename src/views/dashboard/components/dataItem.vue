<template>
  <n-card :content-style="{ padding: '16px' }" :header-style="{ padding: '5px 10px' }" :segmented="true">
    <template #header>
      <n-skeleton text v-if="loading" width="60%" />
      <template v-else>
        <div flex-center-v justify-between>
          <span text-4>{{ data.title }}</span>
        </div>
      </template>
    </template>
    <n-skeleton text v-if="loading" :repeat="6" />
    <template v-else>
      <div h-130px flex justify-between flex-col>
        <div flex-center-h flex-col>
          <span text-6>{{ data.data }}</span>
        </div>
        <div flex-center-h flex-col flex-1>
          <slot name="extra" :extra="data.extra"></slot>
        </div>
        <div class="divide"></div>
        <div flex-center-v justify-between>
          <span>{{ data.bottomTitle }}</span>
          <span>{{ data.totalSum }}</span>
        </div>
      </div>
    </template>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'DataItem',
})
</script>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

let loading = $ref(true)

setTimeout(() => {
  loading = false
}, 1000)

</script>

<style lang="less" scoped>
.divide {
  margin: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}
</style>
