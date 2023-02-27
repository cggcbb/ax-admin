import { RouteRecordRaw } from 'vue-router'

const Layout = () => import(/** layout */ '~/components/Layout.vue')
const Github = () => import(/** github */ '~/views/github.vue')
const Workbench = () => import(/** workbench */ '~/views/dashboard/workbench.vue')
const Dependencies = () => import(/** package */ '~/views/dep/index.vue')

/**
 *
 *  path: 'path'                     // 跳转路径
 *  name: 'name'                     // 路由名字，<keep-alive>组件需要用到
 *  meta: {
 *    cache: true,                   // 是否被<keep-alive>组件缓存
 *    title: 'title',                // 设置路由在面包屑中展示的名字
 *    hidden: false                  // 是否在页签栏展示, 父元素设置了，会影响子元素
 *    affix: true,                   // 是否固定在页签栏, 固定后不能删除
 *    affixIcon: 'n-icon-home'       // 页签栏的图标 在src/config/icon/index.ts里面转换
 *  }
 *
 */

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'Dashboard'
    },
    component: Layout,
    redirect: '/dashboard/workbench',
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: Workbench,
        meta: {
          cache: true,
          title: '首页',
          affix: true,
          affixIcon: 'n-icon-home'
        }
      }
    ]
  },
  {
    path: '/request',
    name: 'request',
    component: Layout,
    meta: {
      title: '模拟请求'
    },
    children: [
      {
        path: 'github',
        name: 'github',
        component: Github,
        meta: {
          cache: true,
          title: 'github',
          affixIcon: 'n-icon-github'
        }
      }
    ]
  },
  {
    path: '/dependencies',
    name: 'dependencies',
    meta: {
      title: '项目信息'
    },
    component: Layout,
    children: [
      {
        path: 'description',
        name: 'description',
        component: Dependencies,
        meta: {
          cache: true,
          title: '项目依赖'
        }
      }
    ]
  }
]
