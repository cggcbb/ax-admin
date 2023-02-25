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
import { MenuInst, MenuOption, NEl } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { routes as menuOptions } from '../../../mock/menu'
import useSetting from '~/store/setting'

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
      { default: () => option.label }
    )
  }
  return h(NEl, {}, { default: () => option.label })
}
</script>

<style lang="less" scoped>
.vertical-menu-container {
  overflow: hidden;
  height: calc(100vh - @logoHeight) !important;
}
</style>
