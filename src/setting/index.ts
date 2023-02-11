import { SelectOption } from 'naive-ui'
import { ISetting, IMenuSetting, IWaterMarkSetting, IDrawer, LayoutAnimationEnum, ILayoutAnimation } from '~/types/common'

// 水印
const waterMarkSetting: IWaterMarkSetting = {
  waterMarkActive: false,
  waterMarkValue: '一匹正在奔腾的黑马',
  waterMarkType: 'text',
  waterMarkImageUrl: '',
  waterMarkSize: 12,
  waterMarkImageSize: 40,
  waterMarkColor: '#808080ff',
  waterMarkRotate: -45,
  watchMarkImageRotate: -30,
  waterMarkTypeOptions: [{
    label: "文字",
    value: 'text',
  },
  {
    label: '图片',
    value: 'image'
  }] as SelectOption[]
}
// 菜单
const menu: IMenuSetting = {
  menuWidth: 210,
  collapsed: false,
  accordion: true,
  collapsedWidth: 65,
  collapsedIconSize: 22,
  autoCollapsedWidth: 110
}
// 抽屉
const drawer: IDrawer = {
  width: 280
}

// 主题色
const themeColor: string = '#18a058'

const layoutAnimation = {
  animationActive: true,
  type: LayoutAnimationEnum.FADE_R
} as ILayoutAnimation

export default {
  waterMarkSetting,
  menu,
  drawer,
  themeColor,
  layoutAnimation,
  layoutAnimationOptions: [
    {
      label: '向右淡出',
      value: LayoutAnimationEnum.FADE_R
    },
    {
      label: '向左淡出',
      value: LayoutAnimationEnum.FADE_L
    },
    {
      label: '向下淡出',
      value: LayoutAnimationEnum.DOWN
    },
    {
      label: '渐隐渐显',
      value: LayoutAnimationEnum.OPACITY
    },
    {
      label: '缩放',
      value: LayoutAnimationEnum.SCALE
    }
  ]
} as ISetting
