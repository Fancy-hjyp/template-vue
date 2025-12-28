import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      // Catch all unmatched routes and redirect to home
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  // Scroll behavior configuration
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果有保存的滚动位置，恢复到该位置
      return savedPosition
    } else {
      // 否则滚动到顶部
      return { top: 0 }
    }
  }
})

// Router navigation guard for setting page titles
router.beforeEach((to, from, next) => {
  // Set page title
  document.title = to.meta.title || ''
  next()
})

export default router