import { BadgeProps, SelectOption, TagProps } from 'naive-ui'

export interface Result<T = any> {
  code: number
  message: string
  data: T
}

export interface IAxiosOption {
  url: string
  method?: string
  data?: any
  headers?: any
}

export interface IAction {
  name: string
  icon: string
  fullscreen?: boolean
  callback?: () => void
  showIcon?: boolean
}

export interface ISetting {
  projectName: string
  waterMarkSetting: IWaterMarkSetting
  menu: IMenuSetting
  drawer: IDrawer
  themeColor: string
  layoutAnimation: ILayoutAnimation
  layoutAnimationOptions: SelectOption[]
  headerSetting: IHeaderSetting
  tabBarSetting: ITabbarSetting
  navBarSetting: INarBarSetting
  layoutSetting: LayoutTypeEnum
}

// 用户水印系统设置
export interface IWaterMarkUserSetting {
  waterMarkActive?: boolean
  waterMarkValue?: string
  waterMarkImageUrl?: string
  waterMarkSize?: number
  waterMarkImageSize?: number
  waterMarkColor?: string
  waterMarkRotate?: number
  watchMarkImageRotate?: number
}

// 系统水印自带设置
export interface IWaterMarkSystemSetting {
  waterMarkType: string
  waterMarkTypeOptions: SelectOption[]
}

// 整体水印设置
export type IWaterMarkSetting = IWaterMarkUserSetting & IWaterMarkSystemSetting

// 菜单
export interface IMenuSetting {
  menuWidth: number
  // 折叠
  collapsed: boolean
  // 手风琴模式
  accordion: boolean
  // 折叠时宽度
  collapsedWidth: number
  // 折叠时icon大小
  collapsedIconSize: number
  // 自动折叠最小宽度
  autoCollapsedWidth: number
}

// 抽屉
export interface IDrawer {
  width: number
}

// layout
export enum LayoutAnimationEnum {
  FADE_R = 'fade-r',
  FADE_L = 'fade-l',
  OPACITY = 'opacity',
  DOWN = 'down',
  SCALE = 'scale',
  SHAKE = 'shake'
}
export interface ILayoutAnimation {
  animationActive: boolean
  type: LayoutAnimationEnum
}

// search
export enum SearchType {
  Google = 'Google',
  Bing = 'Bing',
  Github = 'Github',
  Youtube = 'Youtube'
}
export enum SearchUrl {
  Google = 'https://www.google.com/search?q=',
  Bing = 'https://cn.bing.com/search?q=',
  Github = 'https://github.com/search?q=',
  Youtube = 'https://www.youtube.com/results?search_query='
}
export interface ISearchUrlMap {
  Google: SearchUrl
  Bing: SearchUrl
  Github: SearchUrl
  Youtube: SearchUrl
}

export interface INotificationItem {
  albumUrl: string
  title: string
  content: string
  isRead: boolean
}

export interface INotification {
  key: string | number
  badgeType: BadgeProps['type']
  title: string
  list: INotificationItem[]
}

// album
export interface IAlbumItem {
  album: string
  songName: string
  singer: string
  albumUrl: string
  date: string
  content: IAlbumItemContent
}
export interface IAlbumItemContent {
  one?: string
  two?: string
}

export interface IHeaderSetting {
  showLogo: boolean
  showTitle: boolean
}

export interface ITabbarSetting {
  showTabBar: boolean
  showAffixIcon: boolean
  showCloseIcon: boolean
}

export interface INarBarSetting {
  showSearch: boolean
  showNotification: boolean
  showRefresh: boolean
  showFullscreen: boolean
  showMusic: boolean
}

export enum LayoutTypeEnum {
  LR = 'lr',
  TB = 'tb'
}

export interface IBreadcrumb {
  label: string
  key: string
  path: string
  children?: IBreadcrumb[]
}

export interface IPersonal {
  user: IPersonalUser
  heros: IPersonalHero[]
  article: IPersonalArticle[]
}

export interface IPersonalUser {
  avatarUrl: string
  name: string
  motto: string
  content: IPersonalContent[]
  tags: IPersonalTags[]
  timeLine: IPersonalTimeLine[]
}

export interface IPersonalHero {
  avatarUrl: string
  name: string
  desc: string
  skills: string[]
}

export interface IPersonalContent {
  key: string
  value: string
}

export interface IPersonalTimeLine {
  type: 'success' | 'info' | 'warning' | 'error'
  text: string
}

export interface IPersonalTags {
  type: TagProps['type']
  text: string
}

export interface IPersonalArticle {
  key: number
  title: string
  author: string
  content: string[]
}
