import { RouteRecordRaw, createRouter, createWebHistory, Router } from 'vue-router'

const Layout = () => import(/** layout */ '~/components/Layout.vue')
const Login = () => import(/** login */ '~/views/login/index.vue')
const Github = () => import(/** github */ '~/views/github.vue')
const Workbench = () => import(/** workbench */ '~/views/dashboard/workbench.vue')
const Package = () => import(/** package */ '~/views/dep/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '/login',
    component: Login
  },
  {
    path: '/',
    name: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    name: '/dashboard',
    component: Layout,
    redirect: '/dashboard/workbench',
    children: [
      {
        path: '/dashboard/workbench',
        name: '/dashboard/workbench',
        component: Workbench
      },
      {
        path: '/github',
        name: '/github',
        component: Github
      },
      {
        path: '/dep',
        name: '/dep',
        component: Package
      },
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
