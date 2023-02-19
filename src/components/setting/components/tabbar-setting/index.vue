<template>
  <n-grid items-center>
    <n-gi :span="20">显示页签</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showTabBar" />
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="20">显示页签图标</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showAffixIcon" />
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="20">是否能关闭</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showCloseIcon" />
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
defineComponent({
  name: 'TabBarSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'

const setting = useSetting()

const { showTabBar, showAffixIcon, showCloseIcon } = $(setting.tabBarSetting)
</script>

<style lang="less" scoped></style>
