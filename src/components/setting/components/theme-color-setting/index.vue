<template>
  <n-grid>
    <n-gi :span="24">
      <n-color-picker show-preview v-model:value="themeColorSetting" :swatches="swatches" />
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
defineComponent({
  name: 'ThemeColorSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'

const setting = useSetting()

const { themeColorSetting } = toRefs(setting)

// 预置颜色
const swatches = [
  '#18a058',
  '#2080f0',
  '#f0a020',
  '#d03050',
  '#01c1dd',
  '#18181c',
  '#9c27b0',
  '#1767aa'
]
</script>

<style lang="less" scoped>

</style>
