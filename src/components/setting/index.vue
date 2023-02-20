<template>
  <n-drawer v-model:show="visible" placement="right" :width="width" :auto-focus="false">
    <n-drawer-content :native-scrollbar="true" closable>
      <template #header>
        <n-grid>
          <n-gi :span="24">系统设置</n-gi>
        </n-grid>
      </template>
      <n-divider dashed>主题设置</n-divider>
      <n-grid>
        <n-gi v-for="(item, index) of themeList" :key="index" :span="12" class="example-wrapper">
          <theme-setting
            :checked="item.checked"
            :left-bg="item.leftBg"
            :right-top-bg="item.rightTopBg"
            :right-bottom-bg="item.rightBottomBg"
            :text="item.text"
            @click="handleThemeSettingClick(item)"
          />
        </n-gi>
      </n-grid>
      <n-divider dashed>主题颜色</n-divider>
      <theme-color-setting />
      <n-divider dashed>切换动画</n-divider>
      <layout-animation-setting />
      <n-divider dashed>头部设置</n-divider>
      <header-setting />
      <n-divider dashed>页签设置</n-divider>
      <tabbar-setting />
      <n-divider dashed>菜单设置</n-divider>
      <menu-setting />
      <n-divider dashed>水印设置</n-divider>
      <watch-mark-setting />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import setting from '~/setting'
import useThemeSetting from './components/theme-setting/useThemeSetting'

export default defineComponent({
  name: 'Setting'
})
</script>

<script lang="ts" setup>
let visible = $ref(false)

const { themeList, handleThemeSettingClick } = useThemeSetting()

const { width } = $(setting.drawer)

// 开启抽屉栏
const openDrawer = () => {
  visible = true
}

defineExpose({
  openDrawer
})
</script>

<style lang="less"></style>
