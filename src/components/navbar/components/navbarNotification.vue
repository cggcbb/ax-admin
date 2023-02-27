<template>
  <n-tabs type="line" v-model:value="currIndex" animated :tab-style="getTabStyle">
    <n-tab-pane :name="item.key" v-for="item of notificationList" :key="item.key">
      <template #tab>
        <n-space>
          <n-el center-layout-v>
            <span mr-1>{{ item.title }}</span>
            <n-badge
              :value="item.list.filter(i => !i.isRead).length"
              :type="item.badgeType"
              :max="99"
            />
          </n-el>
        </n-space>
      </template>
      <n-spin :show="loading">
        <n-scrollbar style="max-height: 394px">
          <n-list clickable v-if="item.list.length">
            <n-list-item
              class="list-item"
              v-for="(i, index) of item.list"
              :key="`${i.title}/${index}`"
              :class="{
                isRead: i.isRead
              }"
              @click="clickItem(i)"
            >
              <n-el>
                <n-grid center-layout-v x-gap="10">
                  <n-gi :span="5" center-layout>
                    <n-avatar round size="large" :src="i.albumUrl" />
                  </n-gi>
                  <n-gi :span="17">
                    <div flex flex-col>
                      <span select-none>{{ i.title }}</span>
                      <n-ellipsis text-3>
                        {{ i.content }}
                      </n-ellipsis>
                    </div>
                  </n-gi>
                </n-grid>
              </n-el>
            </n-list-item>
          </n-list>
          <n-empty v-else center-layout min-h-200px description="有没有，好像并不重要 ..." />
        </n-scrollbar>
      </n-spin>
    </n-tab-pane>
  </n-tabs>
  <n-el class="notification-options">
    <n-el class="item clear" v-show="notificationList[currIndex].list.length" @click="clear">
      清空
    </n-el>
    <n-el class="item" @click="loadMore">查看更多</n-el>
  </n-el>
</template>

<script lang="ts">
defineComponent({
  name: 'NavBarNotification'
})
</script>

<script setup lang="ts">
import { CSSProperties } from 'vue'
import { INotification, INotificationItem } from '~/types/common'

defineProps<{
  notificationList: INotification[]
  loading: boolean
}>()

const currIndex = $ref(0)

const emits = defineEmits(['clickItem', 'clear', 'loadMore'])

const clickItem = (item: INotificationItem) => {
  emits('clickItem', item)
}

const clear = () => {
  emits('clear', currIndex)
}

const loadMore = () => {
  emits('loadMore', currIndex)
}

const getTabStyle = computed((): CSSProperties => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '5rem'
  }
})
</script>

<style lang="less" scoped>
.list-item {
  &.isRead {
    opacity: 0.3;
  }
  &:hover {
    background-color: var(--n-color-hover);
  }
}
.notification-options {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--border-color);
  .item {
    display: flex;
    justify-content: center;
    flex: 1;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    transition: color 0.3s;
    cursor: pointer;
    user-select: none;
    &.clear {
      border-right: 1px solid var(--border-color);
    }
    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
