<template>
  <n-card :content-style="{ padding: '10px' }" :header-style="{ padding: '5px' }" :segmented="true">
    <template #header>
      <n-skeleton text v-if="loading" width="60%" />
      <template v-else>
        <div class="flex items-center justify-between">
          <span class="text-sm text-bold">{{ data.title }}</span>
        </div>
      </template>
    </template>
    <n-skeleton text v-if="loading" :repeat="6" />
    <template v-else>
      <div h-130px class="flex flex-col justify-between">
        <div class="flex flex-col justify-center">
          <span class="text-xxl">{{ data.data }}</span>
        </div>
        <div class="flex flex-col justify-center flex-1">
          <slot name="extra" :extra="data.extra"></slot>
        </div>
        <div class="divide"></div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-grey">{{ data.bottomTitle }}</span>
          <span class="text-sm text-grey">{{ data.totalSum }}</span>
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

<style lang="scss" scoped>
.divide {
  margin: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}
</style>
