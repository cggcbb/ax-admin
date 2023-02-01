import { RouteRecordRaw, createRouter ,createWebHistory, Router} from 'vue-router'

const Layout = () => import(/** layout */ '~/components/Layout.vue')
const Login = () => import(/** login */ '~/views/login/index.vue')
// const orderChart =() => import(/** orderChart */ '~/components/chart/orderChart.vue')
const axios =() => import(/** orderChart */ '~/views/axios.vue')
const workbench  = () => import(/** orderChart */ '~/views/dashboard/workbench.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '/login',
    component: Login
  },
  {
    path: '/',
    name: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: '/dashboard',
    component: Layout,
    redirect: '/workbench',
    children: [
      {
        path: '/workbench',
        name: '/workbench',
        component: workbench
      },
      {
        path: '/axios',
        name: '/axios',
        component: axios
      },
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
