import { createRouter, createWebHistory, Router } from 'vue-router'

import { constantRoutes } from './routes/constants'
import { asyncRoutes } from './routes/asyncRoutes'

export const routes = [...constantRoutes, ...asyncRoutes]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
