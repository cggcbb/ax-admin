// 用户系统设置
export interface IWaterMarkUserSetting {
  waterMarkActive?: boolean,
  waterMarkValue?: string,
  waterMarkImageUrl?: string,
  waterMarkSize?: number,
  waterMarkImageSize?: number,
  waterMarkColor?: string,
  waterMarkRotate?: number,
  watchMarkImageRotate?: number
}
// 系统自带设置
export interface IWaterMarkSystemSetting {
  waterMarkType: string,
  waterMarkTypeOptions: IWaterMarkTypeOptionsItem[]
}
// 整体设置
export type WaterMarkSetting = IWaterMarkUserSetting & IWaterMarkSystemSetting
export interface IWaterMarkTypeOptionsItem {
  label: string,
  value: string
}

// 缓存key
const STORAGE_WATER_MASK_KEY = 'ax-water-mark'

const defaultWaterMarkSetting = {
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
}

const useSetting = defineStore('setting', () => {
  // 菜单折叠
  const collapsed = ref(false)
  // 菜单宽度
  const menuWidth = ref(210)
  // 手风琴模式
  const accordion = ref(false)

  // 优先取localStorage
  const storageWaterMaskValue = localStorage.getItem(STORAGE_WATER_MASK_KEY)
  const waterMarkSetting = storageWaterMaskValue
    ? reactive<WaterMarkSetting>(JSON.parse(storageWaterMaskValue) as WaterMarkSetting)
    : reactive<WaterMarkSetting>(defaultWaterMarkSetting)

  watch(waterMarkSetting, (newSetting) => {
    console.log(newSetting);
    localStorage.setItem(STORAGE_WATER_MASK_KEY, JSON.stringify(newSetting))
  })

  const setCollapsed = (isCollapsed: boolean): void => {
    collapsed.value = isCollapsed
  }

  const setMenuWidth = (width: number): void => {
    menuWidth.value = width
  }

  return {
    collapsed,
    menuWidth,
    accordion,
    setCollapsed,
    setMenuWidth,
    waterMarkSetting
  }
})

export default useSetting

