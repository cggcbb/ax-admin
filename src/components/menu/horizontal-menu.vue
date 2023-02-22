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
import { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
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
      { default: () => option.label }
    )
  }
  return h('div', {}, { default: () => option.label })
}
</script>

<style lang="less" scoped>
.horizontal-menu-container {
  overflow: auto;
  margin: 0 40px 0 12px;
  box-shadow: var(--box-shadow-3) inset;
  flex: 1;
}

// 默认值 overflow： hidden，会导致菜单文字显示不全
:deep(.n-menu-item-content-header) {
  overflow: inherit !important;
}
</style>
