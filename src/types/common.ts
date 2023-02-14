import { SelectOption } from "naive-ui";

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

export interface ISetting {
  waterMarkSetting: IWaterMarkSetting,
  menu: IMenuSetting,
  drawer: IDrawer,
  themeColor: string,
  layoutAnimation: ILayoutAnimation,
  layoutAnimationOptions: SelectOption[]
}

// 用户水印系统设置
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

// 系统水印自带设置
export interface IWaterMarkSystemSetting {
  waterMarkType: string,
  waterMarkTypeOptions: SelectOption[]
}

// 整体水印设置
export type IWaterMarkSetting = IWaterMarkUserSetting & IWaterMarkSystemSetting


// 菜单
export interface IMenuSetting {
  menuWidth: number,
  // 折叠
  collapsed: boolean
  // 手风琴模式
  accordion: boolean,
  // 折叠时宽度
  collapsedWidth: number,
  // 折叠时icon大小
  collapsedIconSize: number,
  // 自动折叠最小宽度
  autoCollapsedWidth: number
}

// 抽屉
export interface IDrawer {
  width: number
}

export enum LayoutAnimationEnum {
  FADE_R = 'fade-r',
  FADE_L = 'fade-l',
  OPACITY = 'opacity',
  DOWN = 'down',
  SCALE = 'scale',
}

export interface ILayoutAnimation {
  animationActive: boolean,
  type: LayoutAnimationEnum
}

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
  Google: SearchUrl,
  Bing: SearchUrl,
  Github: SearchUrl,
  Youtube: SearchUrl
}
