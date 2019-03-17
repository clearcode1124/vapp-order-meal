import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/components/Order'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Order',
      component: Order
    },
    {
      path: '/users',
      name: 'User',
      component: User
    }
  ]
})
