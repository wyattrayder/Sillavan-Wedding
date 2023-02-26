import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ourstory',
    name: 'ourstory',
    component: () => import('../views/OurStoryView.vue')
  },
  {
    path: '/weddingparty',
    name: 'weddingparty',
    component: () => import('../views/WeddingPartyView.vue')
  },
  {
    path: '/registry',
    name: 'registry',
    component: () => import('../views/RegistryView.vue')
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: () => import('../views/RsvpView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
