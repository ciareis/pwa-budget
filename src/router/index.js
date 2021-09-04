import { createWebHistory, createRouter } from "vue-router";

import beforeEachFn from './before-each.js'
import { routes } from '@/domains/index.js'

const router = store => {
  const r = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
    scrollBehavior: () => ({ x: 0, y: 0 })
  })
  r.beforeEach(beforeEachFn(store))

  return r
}

export default router
