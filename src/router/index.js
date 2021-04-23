import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/signup',
    name: 'Signup_page',
    component: () => import('../views/Signup_page.vue')
  },
  {
    path: '/mybooking',
    name: 'Mybooking_page',
    component: () => import('../views/Mybooking_page.vue')
  },
  {
    path: '/canclebooking',
    name: 'Cancle_page',
    component: () => import('../views/Cancle_page.vue')
  },
  {
    path: '/',
    name: 'Booking_page',
    component: () => import('../views/Booking_page.vue')
  },
  // {
  //   path: '/',
  //   name: 'Signin_page',
  //   component: () => import('../views/Signin_page.vue')
  // },
  {
    path: '/about',
    name: 'About',
    
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
