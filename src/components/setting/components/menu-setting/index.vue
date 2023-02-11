<template>
  <n-grid items-center>
    <n-gi :span="8">
      菜单宽度
    </n-gi>
    <n-gi :span="16">
      <n-input-number size="small" v-model:value="menuWidth" placeholder="请输入" min="0" :max="600" :step="10">
        <template #suffix>
          px
        </template>
      </n-input-number>
    </n-gi>
  </n-grid>
  <n-grid items-center mt12px>
    <n-gi :span="8">
      自动折叠
    </n-gi>
    <n-gi :span="16">
      <n-input-number size="small" v-model:value="autoCollapsedWidth" placeholder="..." min="0" :max="600" :step="10">
        <template #prefix>
          最小
        </template>
        <template #suffix>
          px
        </template>
      </n-input-number>
    </n-gi>
  </n-grid>
  <n-grid items-center mt-12px>
    <n-gi :span="17">
      手风琴模式
    </n-gi>
    <n-gi :span="7">
      <n-switch v-model:value="accordion" @update:value="handleActiveChange">
        <template #checked>
          开启
        </template>
        <template #unchecked>
          关闭
        </template>
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

const setting = useSetting()

const { menuWidth, autoCollapsedWidth, accordion } = toRefs(setting.menuSetting)

const message = useMessage()
const handleActiveChange = (val: boolean) => {
  const msg = val ? '开启' : '关闭'
  message.success(`手风琴模式 ${msg}`)
}

</script>

<style lang="less" scoped>

</style>
