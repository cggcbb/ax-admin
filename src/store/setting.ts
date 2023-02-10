import setting from '~/setting'
import { IMenuSetting, WaterMarkSetting, } from '~/types/common'
import { STORAGE_WATER_MASK_KEY, STORAGE_MENU_KEY } from '~/config/storage'

const useSetting = defineStore('setting', () => {

  // 优先取localStorage
  const storageWaterMaskValue = localStorage.getItem(STORAGE_WATER_MASK_KEY)
  const storageMenuValue = localStorage.getItem(STORAGE_MENU_KEY)
  // 水印
  const waterMarkSetting = storageWaterMaskValue
    ? reactive(JSON.parse(storageWaterMaskValue) as WaterMarkSetting)
    : reactive(setting.waterMarkSetting)
  // 菜单
  const menuSetting = storageMenuValue
    ? reactive(JSON.parse(storageMenuValue) as IMenuSetting)
    : reactive(setting.menu)


  watch(waterMarkSetting, (newSetting) => {
    localStorage.setItem(STORAGE_WATER_MASK_KEY, JSON.stringify(newSetting))
  })

  watch(menuSetting, (newSetting) => {
    localStorage.setItem(STORAGE_MENU_KEY, JSON.stringify(newSetting))
  })

  const setCollapsed = (isCollapsed: boolean): void => {
    menuSetting.collapsed = isCollapsed
  }

  return {
    setCollapsed,
    waterMarkSetting,
    menuSetting
  }
})

export default useSetting

