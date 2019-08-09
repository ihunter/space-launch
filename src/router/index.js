import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
    },
    {
      path: '/launches',
      name: 'launches',
      component: () => import(/* webpackChunkName: "launches" */ '@/views/Launches')
    },
    {
      path: '/launches/:launchID',
      name: 'launch',
      component: () => import(/* webpackChunkName: "launch" */ '@/views/LaunchDetails'),
      props (route) {
        const props = { ...route.params }
        props.launchID = +props.launchID
        return props
      }
    }
  ]
})
