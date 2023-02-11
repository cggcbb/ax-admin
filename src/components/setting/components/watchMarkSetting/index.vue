<template>
  <section>
    <n-grid flex justify-between mb-12px>
      <n-gi :span="20">
        开启水印
      </n-gi>
      <n-gi :span="4">
        <n-switch size="small" v-model:value="waterMarkActive" @update:value="handleActiveChange" />
      </n-gi>
    </n-grid>
    <n-grid flex justify-between items-center mb-12px>
      <n-gi :span="8">
        开启类型
      </n-gi>
      <n-gi :span="16">
        <n-select size="small" :disabled="!waterMarkActive" v-model:value="waterMarkType"
          :options="waterMarkTypeOptions" />
      </n-gi>
    </n-grid>
    <n-grid flex justify-between items-center mb-12px>
      <n-gi :span="8">
        {{ waterMarkType === 'text' ? '水印文字' : '图片地址' }}
      </n-gi>
      <n-gi :span="16">
        <n-input v-if="waterMarkType === 'text'" :disabled="!waterMarkActive" size="small"
          v-model:value="waterMarkValue" placeholder="...." />
        <n-tooltip v-else trigger="hover">
          <template #trigger>
            <n-input size="small" :disabled="!waterMarkActive" v-model:value="waterMarkImageUrl" placeholder="图片地址" />
          </template>
          记得注意图像 URL 的跨域设置
        </n-tooltip>
      </n-gi>
    </n-grid>
    <n-grid flex justify-between items-center>
      <n-gi :span="8">
        {{ waterMarkType === 'text' ? '文字大小' : ' 图片大小' }}
      </n-gi>
      <n-gi :span="16">
        <n-input-number v-if="waterMarkType === 'text'" :disabled="!waterMarkActive" size="small" :min="1"
          v-model:value="waterMarkSize" placeholder="请输入" />
        <n-tooltip v-else trigger="hover">
          <template #trigger>
            <n-input-number :disabled="!waterMarkActive" size="small" :min="1" v-model:value="waterMarkImageSize"
              placeholder="请输入" />
          </template>
          修改图片大小后，请重新开启水印
        </n-tooltip>
      </n-gi>
    </n-grid>
    <n-grid flex justify-between items-center mt-12px v-if="waterMarkType === 'text'">
      <n-gi :span="8">
        水印颜色
      </n-gi>
      <n-gi :span="16">
        <n-color-picker size="small" :disabled="!waterMarkActive" show-preview v-model:value="waterMarkColor" />
      </n-gi>
    </n-grid>
    <n-grid flex justify-between items-center mt-12px>
      <n-gi :span="8">
        旋转角度
      </n-gi>
      <n-gi :span="16">
        <n-input-number v-if="waterMarkType === 'text'" :disabled="!waterMarkActive" size="small"
          v-model:value="waterMarkRotate" placeholder="...." />
        <n-input-number v-else size="small" :disabled="!waterMarkActive" v-model:value="watchMarkImageRotate"
          placeholder="...." />
      </n-gi>
    </n-grid>
  </section>
</template>

<script lang="ts">
defineComponent({
  name: 'WaterMarkSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'

const {
  waterMarkActive,
  waterMarkValue,
  waterMarkType,
  waterMarkImageUrl,
  waterMarkSize,
  waterMarkImageSize,
  waterMarkColor,
  waterMarkRotate,
  watchMarkImageRotate,
  waterMarkTypeOptions
} = toRefs(useSetting().waterMarkSetting)

const message = useMessage()

const handleActiveChange = (val: boolean) => {
  message.success(val ? '开启水印' : '关闭水印')
}
</script>

<style lang="less" scoped>

</style>
