<template>
  <section class="notification-container">
    <n-el v-for="item of list" :key="item.title" class="notification-item">
      <n-grid flex-center-v x-gap="10">
        <n-gi :span="5" flex-center-all>
          <n-avatar
            round
            size="large"
            :src="item.albumUrl"
            hover:transform-scale-200
            transform-origin-right-center
            transition-transform-300
          />
        </n-gi>
        <n-gi :span="17">
          <div flex flex-col>
            <span text-3>{{ item.title }}</span>
            <n-ellipsis text-3>
              {{ item.content }}
            </n-ellipsis>
          </div>
        </n-gi>
        <n-gi :span="2" flex-center-v>
          <n-popover trigger="hover">
            <template #trigger>
              <n-icon cursor-pointer :size="16" class="notification-icon" @click="clickIcon(item)">
                <unReadIcon v-if="item.selected"></unReadIcon>
                <readIcon v-else></readIcon>
              </n-icon>
            </template>
            <span>标记为：{{ item.selected ? '未读' : '已读' }}</span>
          </n-popover>
        </n-gi>
      </n-grid>
    </n-el>
    <n-el class="notification-options">
      <n-space justify="center">
        <n-button text tag="a" size="small" @click="readAll">全部已读</n-button>
        <n-button text tag="a" size="small" @click="unReadAll">全部未读</n-button>
      </n-space>
    </n-el>
  </section>
</template>

<script lang="ts">
defineComponent({
  name: 'NavBarNotification'
})
</script>

<script setup lang="ts">
import { EyeOffOutline as readIcon, EyeOutline as unReadIcon } from '@vicons/ionicons5'
import { INotificationItem } from '~/types/common'

defineProps<{
  list: INotificationItem[]
}>()

const emits = defineEmits(['clickIcon', 'readAll', 'unReadAll'])

const clickIcon = (item: INotificationItem) => {
  emits('clickIcon', item)
}

const readAll = () => {
  emits('readAll')
}

const unReadAll = () => {
  emits('unReadAll')
}
</script>

<style lang="less" scoped>
.notification-container {
  margin-top: 8px;

  .notification-item {
    padding-top: 12px;
    user-select: none;

    &:nth-child(1) {
      padding-top: 0;
    }
  }

  .notification-icon {
    transition: color 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }

  .notification-options {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px dashed var(--border-color);
  }
}
</style>
