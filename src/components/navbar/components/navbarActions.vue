<template>
  <section flex-center-all>
    <span
      class="action-item"
      v-for="(action, index) in actionRender"
      :key="`${action.name}-${index}`"
    >
      <n-popover
        placement="bottom"
        trigger="click"
        :width="320"
        v-if="action.name === 'bell-icon'"
      >
        <template #trigger>
          <n-badge
            processing
            :value="badgeValue"
            :class="{ active: !badgeValue }"
          >
            <n-icon size="20" :component="action.component" />
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
        v-else
        size="20"
        @click.stop="action.callback"
        :component="action.component"
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
import {
  SearchOutline as SearchIcon,
  NotificationsOutline as BellIcon,
  SettingsOutline as SettingIcon,
  ExpandOutline as ExpandOutIcon,
  ContractOutline as ContractOutIcon,
  RefreshOutline as RefreshIcon
} from '@vicons/ionicons5'
import useNotification from '../useNotification'

const emits = defineEmits([
  'search-click',
  'bell-click',
  'full-screen-click',
  'setting-click',
  'refresh-click'
])

interface IAction {
  name: string
  component: any
  fullscreen?: boolean
  callback?: () => void
}

const actions: IAction[] = [
  {
    name: 'search-icon',
    component: SearchIcon,
    callback: () => {
      emits('search-click')
    }
  },
  {
    name: 'bell-icon',
    component: BellIcon
  },
  {
    name: 'refresh-icon',
    component: RefreshIcon,
    callback: () => {
      emits('refresh-click')
    }
  },
  {
    name: 'full-screen-icon',
    component: ExpandOutIcon,
    callback: () => {
      emits('full-screen-click')
    }
  },
  {
    name: 'full-screen-icon',
    component: ContractOutIcon,
    fullscreen: true,
    callback: () => {
      emits('full-screen-click')
    }
  },
  {
    name: 'setting-icon',
    component: SettingIcon,
    callback: () => {
      emits('setting-click')
    }
  }
]

const actionRender = shallowRef<IAction[] | null>([...actions])

watch(
  isFullscreen,
  isFullscreen => {
    actionRender.value = isFullscreen
      ? [...actions].filter(
          action =>
            action.name !== 'full-screen-icon' ||
            (action.name === 'full-screen-icon' && action.fullscreen)
        )
      : [...actions].filter(
          action =>
            action.name !== 'full-screen-icon' ||
            (action.name === 'full-screen-icon' && !action.fullscreen)
        )
  },
  { immediate: true }
)

const { badgeValue, notificationList, handleClickIcon, handleReadAll } =
  useNotification()

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
