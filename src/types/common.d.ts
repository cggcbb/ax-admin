declare interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

export interface ISetting {
  waterMarkSetting: WaterMarkSetting,
  menu: IMenuSetting,
  drawer: IDrawer,
  themeColor: string
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
  waterMarkTypeOptions: IWaterMarkTypeOptionsItem[]
}

// 整体水印设置
export type IWaterMarkSetting = IWaterMarkUserSetting & IWaterMarkSystemSetting
export interface IWaterMarkTypeOptionsItem {
  label: string,
  value: string
}

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
