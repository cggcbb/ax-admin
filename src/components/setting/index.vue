<template>
  <n-drawer v-model:show="visible" placement="right" width="280" :native-scrollbar="true" :auto-focus="false">
    <n-drawer-content title="系统设置" closable>
      <n-divider dashed>主题设置</n-divider>
      <n-grid>
        <n-gi v-for="(item, index) of themeList" :key="index" :span="12" class="example-wrapper">
          <theme-setting :checked="item.checked" :left-bg="item.leftBg" :right-top-bg="item.rightTopBg"
            :right-bottom-bg="item.rightBottomBg" :text="item.text" @click="handleThemeSettingClick(item)" />
        </n-gi>
      </n-grid>
      <n-divider dashed>菜单设置</n-divider>
      <menu-setting />
      <n-divider dashed>水印设置</n-divider>
      <watch-mark-setting />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import useThemeSetting from './components/theme-setting/useThemeSetting'

export default defineComponent({
  name: 'setting',
  setup() {
    const visible = ref(false)

    const { themeList, handleThemeSettingClick } = useThemeSetting()

    // 开启抽屉栏
    const openDrawer = () => {
      visible.value = true
    }

    return {
      visible,
      themeList,
      handleThemeSettingClick,
      openDrawer
    }
  }
})
</script>

<style lang="less">

</style>
