<template>
  <n-el class="horizontal-menu-container">
    <n-scrollbar x-scrollable>
      <n-menu
        mode="horizontal"
        :options="menuOptions"
        :render-label="renderMenuLabel"
        :default-value="defaultValue"
      />
    </n-scrollbar>
  </n-el>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HorizontalMenu'
})
</script>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { NEl, NBadge } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { menuBadge } from '~/types/common'
import { routes as menuOptions } from '../../../mock/menu'

const defaultValue = $computed(() => useRoute().fullPath)

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
    ? h('div', { class: 'horizontal-menu-has-badge' }, [
        h('span', { class: 'horizontal-menu-title' }, option.label as string),
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
.horizontal-menu-container {
  overflow: auto;
  margin: 0 40px 0 12px;
  box-shadow: var(--box-shadow-3) inset;
  flex: 1;
}
.horizontal-menu-has-badge {
  display: flex;
  align-items: center;
  .horizontal-menu-title {
    margin-right: 6px;
  }
}
// 默认值 overflow： hidden，会导致菜单文字显示不全
:deep(.n-menu-item-content-header) {
  overflow: inherit !important;
}
</style>
