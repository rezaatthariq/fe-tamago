import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import Dashboard from '../views/Dashboard.vue'
import profile from '../views/profile.vue'
import showprofile from '../views/showprofile.vue'
import joinproject from '../views/joinproject.vue'
import joinsuccess from '../views/joinsuccess.vue'
import createproject from '../views/createproject.vue'
import createsuccess from '../views/createsuccess.vue'
import projectboard from '../views/projectboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
  },
  {
    path: '/register',
    name: 'Register',
    component: register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
  },
  {
    path: '/showprofile',
    name: 'showprofile',
    component: showprofile,
  },
  {
    path: '/joinproject',
    name: 'joinproject',
    component: joinproject,
  },
  {
    path: '/joinsuccess',
    name: 'joinsuccess',
    component: joinsuccess,
  },
  {
    path: '/createproject',
    name: 'createproject',
    component: createproject,
  },
  {
    path: '/createsuccess',
    name: 'createsuccess',
    component: createsuccess,
  },
  {
    path: '/projectboard',
    name: 'projectboard',
    component: projectboard,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
