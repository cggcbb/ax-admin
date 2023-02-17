const Layout = () => import(/** layout */ '~/components/Layout.vue')
const Login = () => import(/** login */ '~/views/login/index.vue')
const Redirect = () => import(/** redirect */ '~/views/redirect/index.vue')
const NotFound = () => import(/** 404 */ '~/views/error/404.vue')

export const constantRoutes = [
  {
    path: '/',
    name: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)*',
        name: 'redirect',
        component: Redirect
      }
    ]
  },
  {
    path: '/404',
    component: Layout,
    children: [
      {
        path: '',
        name: '404',
        component: NotFound
      }
    ]
  },
  { path: '/:pathMatch(.*)', redirect: '/404' }
]
