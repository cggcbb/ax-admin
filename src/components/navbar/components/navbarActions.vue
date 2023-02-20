<template>
  <section flex-center-all>
    <span class="action-item" v-for="(action, index) in actions" :key="`${action.name}-${index}`">
      <n-popover
        placement="bottom"
        trigger="click"
        :width="320"
        v-if="action.name === 'bell-icon' && action.showIcon"
      >
        <template #trigger>
          <n-badge processing :value="badgeValue" :class="{ active: !badgeValue }">
            <n-icon size="20" :component="NIconTransform[action.icon]" />
          </n-badge>
        </template>
        <navbar-notification
          :list="notificationList"
          @clickIcon="handleClickIcon"
          @read-all="handleReadAll"
          @un-read-all="handleReadAll(false)"
        />
      </n-popover>
      <n-icon
        v-else-if="action.showIcon"
        size="20"
        @click.stop="action.callback"
        :component="NIconTransform[action.icon]"
      />
    </span>
  </section>
</template>

<script lang="ts">
defineComponent({
  name: 'NavBarActions'
})
</script>

<script setup lang="ts">
import { isFullscreen } from '~/composables'
// import { CSSProperties } from 'vue'
import useNotification from '../useNotification'
import useSetting from '~/store/setting'
import { IAction } from '~/types/common'
import { NIconTransform } from '~/config/icon'

const emits = defineEmits([
  'search-click',
  'bell-click',
  'full-screen-click',
  'setting-click',
  'refresh-click'
])

const setting = useSetting()
const { showSearch, showNotification, showRefresh, showFullscreen } = $(setting.narBarSetting)

let actions = $ref<IAction[]>([])

watchPostEffect(() => {
  actions = [
    {
      name: 'search-icon',
      icon: 'n-icon-search',
      callback: () => {
        emits('search-click')
      },
      showIcon: showSearch
    },
    {
      name: 'bell-icon',
      icon: 'n-icon-bell',
      showIcon: showNotification
    },
    {
      name: 'refresh-icon',
      icon: 'n-icon-refresh',
      callback: () => {
        emits('refresh-click')
      },
      showIcon: showRefresh
    },
    {
      name: 'full-screen-icon',
      icon: 'n-icon-expand-out',
      callback: () => {
        emits('full-screen-click')
      },
      showIcon: showFullscreen
    },
    {
      name: 'full-screen-icon',
      icon: 'n-icon-contract-out',
      fullscreen: true,
      callback: () => {
        emits('full-screen-click')
      },
      showIcon: showFullscreen
    },
    {
      name: 'setting-icon',
      icon: 'n-icon-setting',
      callback: () => {
        emits('setting-click')
      },
      showIcon: true
    }
  ]
    .filter(item => item.showIcon)
    .filter(item =>
      isFullscreen.value
        ? item.name !== 'full-screen-icon' || item.fullscreen
        : item.name !== 'full-screen-icon' || !item.fullscreen
    )
})

const { badgeValue, notificationList, handleClickIcon, handleReadAll } = useNotification()

// const railStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
//   const style: CSSProperties = {}
//   if (checked) {
//     style.background = '#333'
//     if (focused) {
//       style.boxShadow = '0 0 0 1px rgba(100, 100, 100, .5)'
//     }
//   } else if (focused) {
//     style.boxShadow = '0 0 0 1px #fff'
//   }
//   return style
// }
</script>

<style lang="less" scoped>
.action-item {
  min-width: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }

  .active {
    color: var(--primary-color);
  }
}
</style>
