<template>
  <section flex-center-all>
    <span class="action-item" v-for="(action, index) in actionRender" :key="`${action.name}-${index}`">
      <n-icon size="20" @click.stop="action.callback">
        <component :is="action.component"></component>
      </n-icon>
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
} from '@vicons/ionicons5'

const emits = defineEmits(['search-click', 'bell-click', 'full-screen-click', 'setting-click'])

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
    component: BellIcon,
    callback: () => {
      emits('bell-click')
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
}
</style>
