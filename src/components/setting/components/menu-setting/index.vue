<template>
  <n-grid items-center>
    <n-gi :span="8"><span>菜单宽度</span></n-gi>
    <n-gi :span="16">
      <n-input-number
        size="small"
        v-model:value="menuWidth"
        placeholder="请输入"
        :min="min"
        :max="600"
        :step="step"
      >
        <template #suffix>px</template>
      </n-input-number>
    </n-gi>
  </n-grid>
  <n-grid items-center mt12px>
    <n-gi :span="8">
      <span>自动折叠</span>
      <n-popover trigger="hover" placement="top-start">
        <template #trigger>
          <n-icon size="16" :component="HelpCircleSharp" ml-2px translate-y-3 cursor-pointer />
        </template>
        <span>当菜单宽度小于此宽度时，菜单自动折叠</span>
      </n-popover>
    </n-gi>
    <n-gi :span="16">
      <n-input-number
        size="small"
        v-model:value="autoCollapsedWidth"
        placeholder="..."
        :min="min"
        :max="600"
        :step="step"
      >
        <template #prefix>最小</template>
        <template #suffix>px</template>
      </n-input-number>
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="17"><span>手风琴模式</span></n-gi>
    <n-gi :span="7">
      <n-switch v-model:value="accordion" @update:value="handleActiveChange">
        <template #checked>开启</template>
        <template #unchecked>关闭</template>
      </n-switch>
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
defineComponent({
  name: 'MenuSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'
import { HelpCircleSharp } from '@vicons/ionicons5'

const setting = useSetting()

const { menuWidth, collapsedWidth, autoCollapsedWidth, accordion } = $(setting.menuSetting)
const { layoutLR } = $(setting)

// layout为上下局部时，菜单最小宽度为collapsedWidth (65px)，保证logo显示
const min = $computed(() => (layoutLR ? 0 : collapsedWidth))
const step = $computed(() => (layoutLR ? 10 : 5))

const message = useMessage()
const handleActiveChange = (val: boolean) => {
  const msg = val ? '开启' : '关闭'
  message.success(`手风琴模式 ${msg}`)
}
</script>

<style lang="less" scoped></style>
