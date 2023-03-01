<template>
  <n-card
    class="card-album-item"
    :content-style="{ padding: '8px 16px' }"
    :header-style="{ padding: '5px 16px' }"
    :segmented="true"
    :bordered="false"
  >
    <template #header>
      <n-skeleton text v-if="loading" />
      <template v-else>
        <div center-layout-v justify-between>
          <n-gradient-text :size="16">{{ data.album }}</n-gradient-text>
          <n-avatar
            size="small"
            :src="data.albumUrl"
            hover:transform-scale-500
            transform-origin-right-top
            transition-transform-300
          ></n-avatar>
        </div>
      </template>
    </template>
    <n-skeleton text v-if="loading" :repeat="6" />
    <template v-else>
      <div h-120px flex justify-between flex-col>
        <span font-size-10>
          {{ data.songName }}
        </span>
        <div center-layout-h flex-col flex-1>
          <slot name="content" :content="data.content"></slot>
        </div>
        <div class="divide"></div>
        <div center-layout-v justify-between>
          <span text-3>{{ data.singer }}</span>
          <span text-3>{{ data.date }}</span>
        </div>
      </div>
    </template>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'DataItem'
})
</script>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

let loading = $ref(true)

setTimeout(() => {
  loading = false
}, 1000)
</script>

<style lang="less" scoped>
.card-album-item {
  .divide {
    margin: 10px 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.09);
    border: none;
  }
}
</style>
