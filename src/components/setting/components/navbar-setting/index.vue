<template>
  <n-grid items-center>
    <n-gi :span="20">搜索</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showSearch" />
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="20">通知</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showNotification" />
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="20">刷新</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showRefresh" />
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="20">全屏</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showFullscreen" />
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
defineComponent({
  name: 'NavBarSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'

const setting = useSetting()

const { showSearch, showNotification, showRefresh, showFullscreen } = $(setting.narBarSetting)
</script>

<style lang="less" scoped></style>
