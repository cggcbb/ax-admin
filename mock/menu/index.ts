import Mock from 'mockjs'
import { Component } from 'vue'
import { MenuOption, NIcon } from 'naive-ui'
import { GET_MENU_LIST } from '~/api/url'
// import { BowlingBallOutline, Leaf, MapOutline, Map, MapSharp, FlameOutline, Flame } from '@vicons/ionicons5'
import { BowlingBallOutline, LogoGithub, FlameOutline, Leaf, LogoWebComponent } from '@vicons/ionicons5'

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
        to: '/dashboard/workbench',
        key: '/dashboard/workbench',
        icon: renderIcon(Leaf),
        label: '首页',
      },
      // {
      //   to: '/index/work-place',
      //   key: '/index/work-place',
      //   icon: renderIcon(Leaf),
      //   label: '工作台',
      // },
    ],
  },
  {
    label: '模拟请求',
    icon: renderIcon(FlameOutline),
    key: '/github',
    children: [
      {
        label: 'github',
        icon: renderIcon(LogoGithub),
        key: '/github',
        to: '/github',
      }
    ]
  },
  {
    label: '项目依赖',
    icon: renderIcon(LogoWebComponent),
    key: '/dep',
    to: '/dep'
  },
]

Mock.mock(RegExp(`${GET_MENU_LIST}`), 'get', function () {
  return Mock.mock({ code: 200, data: routes, msg: '获取菜单列表成功' })
})

