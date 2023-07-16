import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import SearchPage from '../views/SearchPage.vue'
import RecipePage from '../views/RecipePage.vue'

const router  = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '/recipe/:recipeName/:recipeId',
      name: 'recipe',
      component: RecipePage
    },
    {
      path: '/author/:author',
      name: 'author',
      component: () => import('../views/AuthorPage.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/404Page.vue')
    }
  ]
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router