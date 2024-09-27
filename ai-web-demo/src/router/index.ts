import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DocCore from '../views/DocCore.vue'
// import DocCoreOld from '../views/DocCoreOld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/doc',
      name: 'doc',
      component: DocCore
      // component: DocCoreOld
    },
  ]
})

export default router
