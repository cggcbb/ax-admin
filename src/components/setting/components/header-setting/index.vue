<template>
  <n-grid items-center>
    <n-gi :span="20">显示 logo</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showLogo" />
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="20">显示 标题</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="showTitle" />
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
defineComponent({
  name: 'HeaderSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'

const setting = useSetting()

const { showLogo, showTitle } = toRefs(setting.headerSetting)
</script>

<style lang="less" scoped></style>
