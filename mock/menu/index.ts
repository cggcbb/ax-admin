import Mock from 'mockjs'
import { Component } from 'vue'
import { MenuOption, NIcon } from 'naive-ui'
import { GET_MENU_LIST } from '~/api/url'
import { BowlingBallOutline, Leaf, MapOutline, Map, MapSharp, FlameOutline, Flame } from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const routes: MenuOption[] = [
  {
    label: 'Dashboard',
    icon: renderIcon(BowlingBallOutline),
    key: 'dashboard',
    children: [
      {
        to: '/workbench',
        key: '/workbench',
        icon: renderIcon(Leaf),
        label: '主控台',
      },
      {
        to: '/index/work-place',
        key: '/index/work-place',
        icon: renderIcon(Leaf),
        label: '工作台',
      },
    ],
  },
  {
    label: '地图',
    icon: renderIcon(MapOutline),
    key: '/map',
    children: [
      {
        to: '/map/gaode',
        key: '/map/gaode',
        icon: renderIcon(MapSharp),
        label: '高德地图'
      },
      {
        to: '/map/baidu',
        key: '/map/baidu',
        icon: renderIcon(Map),
        label: '百度地图',
      },
    ],
  },
  {
    label: '项目信息',
    icon: renderIcon(FlameOutline),
    key: '/axios',
    children: [
      {
        to: '/axios',
        key: '/axios',
        icon: renderIcon(Flame),
        label: '项目依赖 axios',
      },
    ],
  },
]

Mock.mock(RegExp(`${GET_MENU_LIST}`), 'get', function () {
  return Mock.mock({ code: 200, data: routes, msg: '获取菜单列表成功' })
})

