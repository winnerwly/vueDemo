import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import Index from '@/page/Index'
import Index1 from '@/page/Index1'
import Login from '@/page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
    	path: '/HelloWorld',
    	name: 'HelloWorld',
      component: Index1
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
