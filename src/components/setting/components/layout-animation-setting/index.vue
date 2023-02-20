<template>
  <n-grid flex justify-between items-center>
    <n-gi :span="20">开启动画</n-gi>
    <n-gi :span="4">
      <n-switch size="small" v-model:value="animationActive" @update:value="handleActiveChange" />
    </n-gi>
  </n-grid>
  <n-grid mt-12px items-center>
    <n-gi :span="8">动画效果</n-gi>
    <n-gi :span="16">
      <n-select
        size="small"
        :disabled="!animationActive"
        v-model:value="type"
        :options="layoutAnimationOptions"
      />
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
defineComponent({
  name: 'LayoutAnimationSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'
import setting from '~/setting'

const { type, animationActive } = $(useSetting().layoutAnimationSetting)

const { layoutAnimationOptions } = setting

const message = useMessage()
const handleActiveChange = (val: boolean) => {
  message.success(val ? '开启动画' : '关闭动画')
}
</script>

<style lang="less" scoped></style>
