import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Building from '@/components/page/building'
import House from '@/components/page/house'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: {name:'house'},//重定向
      children:[
        {
          path:'building',
          name:'building',
          component: Building
        },
        {
          path:'house',
          name:'house',
          component: House
        }
      ]
    }
  ]
})
