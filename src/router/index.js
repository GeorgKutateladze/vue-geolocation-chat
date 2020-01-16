import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/proflie/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requersAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Check if route requires an auth
  if (to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state user
    let user = firebase.auth().currentUser
    if (user) {
      // user signed in, proceed to route
      next()
    } else {
      // user is not signed in, redirect to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router 
