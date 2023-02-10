import { ISetting, IMenuSetting, WaterMarkSetting } from '~/types/common'

export default {
  waterMarkSetting: {
    waterMarkActive: false,
    waterMarkValue: '一匹正在奔腾的黑马',
    waterMarkType: 'text',
    waterMarkImageUrl: '',
    waterMarkSize: 12,
    waterMarkImageSize: 40,
    waterMarkColor: 'rgba(128, 128, 128, .8)',
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
  } as WaterMarkSetting,
  menu: {
    menuWidth: 210,
    collapsed: false,
    accordion: false
  } as IMenuSetting,
} as ISetting
