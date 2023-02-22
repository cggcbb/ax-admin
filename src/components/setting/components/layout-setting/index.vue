<template>
  <n-grid>
    <n-gi
      v-for="(item, index) of layoutList"
      :key="index"
      :span="12"
      @click="handleLayoutClick(item)"
    >
      <theme-setting
        :checked="item.checked"
        :left-bg="item.leftBg"
        :right-top-bg="item.rightTopBg"
        :right-bottom-bg="item.rightBottomBg"
        :text="item.text"
        :class="item.class"
      />
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
defineComponent({
  name: 'LayoutSetting'
})
</script>

<script lang="ts" setup>
import useSetting from '~/store/setting'
import { useThemeVars } from 'naive-ui'
import { LayoutTypeEnum } from '~/types/common'
import { IThemeSettingItem } from '../theme-setting/useThemeSetting'

type layoutSettingType = Omit<IThemeSettingItem, 'isDark'> & {
  type: LayoutTypeEnum
  class?: string
}

const setting = useSetting()
const { layoutLR } = $(setting)

const { pressedColor } = unref(useThemeVars())
const layoutList = reactive<layoutSettingType[]>([
  {
    leftBg: '#000',
    rightTopBg: pressedColor,
    rightBottomBg: pressedColor,
    checked: layoutLR,
    type: LayoutTypeEnum.LR,
    text: '左右'
  },
  {
    leftBg: pressedColor,
    rightTopBg: '#000',
    rightBottomBg: pressedColor,
    checked: !layoutLR,
    type: LayoutTypeEnum.TB,
    class: 'hidden-left',
    text: '上下'
  }
])

const handleLayoutClick = (item: layoutSettingType) => {
  setting.layoutSetting = item.type
}
</script>

<style lang="less" scoped></style>
