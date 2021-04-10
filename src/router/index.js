import Vue from 'vue'
import VueRouter from 'vue-router'
import contacts from './contacts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [...contacts]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
