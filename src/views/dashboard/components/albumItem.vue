<template>
  <n-card
    class="card-album-item"
    :content-style="{ padding: '8px 16px' }"
    :header-style="{ padding: '5px 16px' }"
    :segmented="true"
  >
    <template #header>
      <n-skeleton text v-if="loading" width="95%" />
      <template v-else>
        <div flex-center-v justify-between>
          <gradient-text :size="16">{{ data.album }}</gradient-text>
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
        <div flex-center-h flex-col flex-1>
          <slot name="content" :content="data.content"></slot>
        </div>
        <div class="divide"></div>
        <div flex-center-v justify-between>
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
  .n-card-header {
    .n-skeleton {
      transform: translateX(6px);
    }
  }

  .divide {
    margin: 10px 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.09);
    border: none;
  }
}
</style>
