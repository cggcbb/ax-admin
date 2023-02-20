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
import { themeColorBlack } from '~/config/themeColor'

const setting = useSetting()
const { themeColorSetting } = $(setting)

// 预置颜色
const swatches = [
  '#18a058',
  '#2080f0',
  '#f0a020',
  '#f84b6d',
  '#01c1dd',
  themeColorBlack,
  '#f47ad9',
  '#fb272b'
]
</script>

<style lang="less" scoped></style>
