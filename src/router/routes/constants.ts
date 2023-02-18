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
    component: Login,
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true
    },
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
        component: NotFound,
        meta: {
          title: 'Not Found'
        }
      }
    ]
  },
  { path: '/:pathMatch(.*)', redirect: '/404' }
]
