<template>
  <n-el class="vertical-menu-container">
    <n-scrollbar x-scrollable>
      <n-menu
        ref="verticalMenu"
        mode="vertical"
        :accordion="menuSetting.accordion"
        :collapsed="menuSetting.collapsed"
        :collapsed-width="menuSetting.collapsedWidth"
        :collapsed-icon-size="menuSetting.collapsedIconSize"
        :options="menuOptions"
        :render-label="renderMenuLabel"
        :value="selectedKey"
        :default-value="selectedKey"
      />
    </n-scrollbar>
  </n-el>
</template>

<script lang="ts">
export default defineComponent({
  name: 'VerticalMenu'
})
</script>

<script lang="ts" setup>
import type { MenuInst, MenuOption } from 'naive-ui'
import { NEl, NBadge } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { routes as menuOptions } from '../../../mock/menu'
import useSetting from '~/store/setting'
import { menuBadge } from '~/types/common'

const setting = useSetting()
const route = useRoute()
const { menuSetting } = setting

const selectedKey = $computed(() => route.fullPath)
const verticalMenu = $ref<MenuInst | null>(null)

watch(
  () => selectedKey,
  newVal => {
    verticalMenu?.showOption(newVal)
  }
)

const renderMenuLabel = (option: MenuOption) => {
  if (option.to) {
    return h(
      RouterLink,
      {
        to: {
          path: option.to as string
        }
      },
      { default: () => createLabel(option) }
    )
  }
  return h(NEl, null, {
    default: () => createLabel(option)
  })
}

const createLabel = (option: MenuOption) => {
  const badge = option.badge as menuBadge
  return badge
    ? h('div', { class: 'vertical-menu-has-badge' }, [
        h('span', { class: 'vertical-menu-title' }, option.label as string),
        h(NBadge, {
          value: badge.content,
          type: badge.badgeType,
          size: 12
        })
      ])
    : option.label
}
</script>

<style lang="less">
.vertical-menu-container {
  overflow: hidden;
  height: calc(100vh - @logoHeight) !important;
}
.vertical-menu-has-badge {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 4px;
  .vertical-menu-title {
    margin-right: 6px;
  }
}
</style>
