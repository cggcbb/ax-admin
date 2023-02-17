import { createRouter, createWebHistory, Router } from 'vue-router'

import { constantRoutes } from './constants'
import { asyncRoutes } from './asyncRoutes'

export const routes = [...constantRoutes, ...asyncRoutes]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
