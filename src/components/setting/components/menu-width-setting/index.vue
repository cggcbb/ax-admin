<template>
  <n-grid items-center>
    <n-gi :span="8">
      菜单宽度
    </n-gi>
    <n-gi :span="16">
      <n-input-number v-model:value="menuWidth">
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
  name: 'menuWidthSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'


const setting = useSetting()

const { menuWidth, accordion } = toRefs(setting)

const message = useMessage()
const handleActiveChange = (val: boolean) => {
  const msg = val ? '开启' : '关闭'
  message.success(`手风琴模式 ${msg}`)
}
</script>

<style lang="less" scoped>

</style>
