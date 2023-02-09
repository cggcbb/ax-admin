<template>
  <section class="scrollbar">
    <n-menu mode="vertical" :accordion="setting.accordion" :collapsed="setting.collapsed" :collapsed-width="64"
      :collapsed-icon-size="22" :options="menuOptions" :render-label="renderMenuLabel" :default-value="defaultValue" />
  </section>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Menu',
})
</script>

<script lang="ts" setup>
import { MenuOption } from 'naive-ui'
import useSetting from '~/store/setting'
import { RouterLink } from 'vue-router'
import { routes as menuOptions } from '../../../mock/menu'

const setting = useSetting()

const defaultValue = $computed(() => useRoute().fullPath)

const renderMenuLabel = (option: MenuOption) => {
  if (option.to) {
    return h(
      RouterLink,
      {
        to: {
          path: option.to as string,
        }
      },
      { default: () => option.label }
    )
  }
  return h('div', {}, { default: () => option.label })
}
</script>

<style lang="less" scoped>
.scrollbar {
  height: calc(100vh - @logoHeight) !important;
  overflow: auto;
}
</style>
