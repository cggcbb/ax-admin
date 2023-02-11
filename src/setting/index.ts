import { ISetting, IMenuSetting, IWaterMarkSetting, IDrawer } from '~/types/common'

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
  }]
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

const themeColor: string = '#18a058'

export default {
  waterMarkSetting,
  menu,
  drawer,
  themeColor
} as ISetting
