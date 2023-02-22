import setting from '~/setting'
import {
  IHeaderSetting,
  ILayoutAnimation,
  IMenuSetting,
  IWaterMarkSetting,
  ITabbarSetting,
  INarBarSetting,
  LayoutTypeEnum
} from '~/types/common'
import {
  STORAGE_WATER_MASK_KEY,
  STORAGE_MENU_KEY,
  STORAGE_THEME_COLOR_KEY,
  STORAGE_LAYOUT_ANIMATION_KEY,
  STORAGE_HEADER_KEY,
  STORAGE_TABBAR_KEY,
  STORAGE_NAVBAR_KEY,
  STORAGE_LAYOUT_KEY
} from '~/config/storage'
import { GlobalThemeOverrides } from 'naive-ui'
import { generateDarkerColor, generateLighterColor } from '~/utils/color'
import { themeColorBlack } from '~/config/themeColor'
import { useLocalStorage } from '@vueuse/core'

const useSetting = defineStore('setting', () => {
  /**
   * VueUse useLocalStorage
   */
  // 水印
  const waterMarkSetting = useLocalStorage<IWaterMarkSetting>(STORAGE_WATER_MASK_KEY, {
    ...setting.waterMarkSetting
  })
  // 页面切换过度动画
  const layoutAnimationSetting = useLocalStorage<ILayoutAnimation>(STORAGE_LAYOUT_ANIMATION_KEY, {
    ...setting.layoutAnimation
  })
  // header
  const headerSetting = useLocalStorage<IHeaderSetting>(STORAGE_HEADER_KEY, {
    ...setting.headerSetting
  })
  // tabbar
  const tabBarSetting = useLocalStorage<ITabbarSetting>(STORAGE_TABBAR_KEY, {
    ...setting.tabBarSetting
  })
  // navbar
  const narBarSetting = useLocalStorage<INarBarSetting>(STORAGE_NAVBAR_KEY, {
    ...setting.navBarSetting
  })
  // layout
  const layoutSetting = useLocalStorage<LayoutTypeEnum>(STORAGE_LAYOUT_KEY, setting.layoutSetting)

  /**
   * 下面2个配置，《菜单》和《主题色》
   * 因为涉及到变化之后的额外逻辑，VueUse useLocalStorage 好像没有提供回调函数
   * 所以这里单独写
   */
  // 优先取localStorage
  const storageMenuValue = localStorage.getItem(STORAGE_MENU_KEY)
  const storageThemeColorValue = localStorage.getItem(STORAGE_THEME_COLOR_KEY)

  // 菜单
  const menuSetting = storageMenuValue
    ? reactive(JSON.parse(storageMenuValue) as IMenuSetting)
    : reactive({ ...setting.menu })

  // 主题色
  const themeColorSetting = storageThemeColorValue
    ? ref<string>(storageThemeColorValue)
    : ref<string>(setting.themeColor)

  /**
   * 这里因为监听了menuSetting的变化
   * 所以用户修改菜单宽度以及点击折叠icon都会触发回调
   * 1. 用户定义菜单宽度的时候，小于一定程度自动折叠
   * 2. 又不能影响折叠icon点击的时候不生效
   * 所以这里加一个开关
   */
  watch(menuSetting, (newSetting: IMenuSetting) => {
    // 自动折叠
    if (!isClickCollapsedIcon) {
      menuSetting.collapsed = newSetting.collapsed =
        newSetting.menuWidth <= menuSetting.autoCollapsedWidth
    }
    localStorage.setItem(STORAGE_MENU_KEY, JSON.stringify(newSetting))
    // 关闭开关
    isClickCollapsedIcon = false
  })

  let isClickCollapsedIcon = $ref(false)
  const setCollapsed = (isCollapsed: boolean): void => {
    isClickCollapsedIcon = true
    // 下面这段代码会触发上面watch，所以先吧开关打开
    menuSetting.collapsed = isCollapsed
  }

  watch(themeColorSetting, (newSetting: string) => {
    if (newSetting === themeColorBlack && isDark.value) {
      window.$message.warning('暗黑主题下，不建议设置黑色主题色')
    }
    localStorage.setItem(STORAGE_THEME_COLOR_KEY, newSetting)
  })

  // 修改主题颜色 themeColorSetting 是响应式的
  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    return {
      common: {
        primaryColor: themeColorSetting.value,
        primaryColorHover: generateDarkerColor(themeColorSetting.value),
        primaryColorPressed: generateLighterColor(themeColorSetting.value)
      }
    }
  })

  const layoutLR = computed(() => layoutSetting.value === LayoutTypeEnum.LR)

  return {
    setCollapsed,
    waterMarkSetting,
    menuSetting,
    themeColorSetting,
    themeOverrides,
    layoutAnimationSetting,
    headerSetting,
    tabBarSetting,
    narBarSetting,
    layoutSetting,
    layoutLR
  }
})

export default useSetting
