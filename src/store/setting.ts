export interface IWaterMarkSetting {
  waterMarkActive: boolean,
  waterMarkValue: string,
  waterMarkType: string,
  waterMarkImageUrl: string,
  waterMarkSize: number,
  waterMarkImageSize: number,
  waterMarkColor: string,
  waterMarkRotate: number,
  watchMarkImageRotate: number,
  waterMarkTypeOptions: IWaterMarkTypeOptionsItem[]
}

export interface IWaterMarkTypeOptionsItem {
  label: string,
  value: string
}

const useSetting = defineStore('setting', () => {
  const collapsed = ref(false)
  const menuWidth = ref(210)

  const waterMarkSetting = reactive<IWaterMarkSetting>({
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
    setCollapsed,
    setMenuWidth,
    waterMarkSetting
  }
})

export default useSetting

