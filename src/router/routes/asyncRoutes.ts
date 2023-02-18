import { RouteRecordRaw } from 'vue-router'

const Layout = () => import(/** layout */ '~/components/Layout.vue')
const Github = () => import(/** github */ '~/views/github.vue')
const Workbench = () => import(/** workbench */ '~/views/dashboard/workbench.vue')
const Dependencies = () => import(/** package */ '~/views/dep/index.vue')

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/workbench',
    children: [
      {
        path: '/dashboard/workbench',
        name: 'workbench',
        component: Workbench,
        meta: {
          cache: true,
          title: '首页',
          affix: true
        }
      },
      {
        path: '/github',
        name: 'github',
        component: Github,
        meta: {
          cache: true,
          title: '模拟请求'
        }
      }
    ]
  },
  {
    path: '/dependencies',
    component: Layout,
    children: [
      {
        path: '',
        name: 'dependencies',
        component: Dependencies,
        meta: {
          cache: true,
          title: '项目依赖'
        }
      }
    ]
  }
]
