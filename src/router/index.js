import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GameList from '@/components/GameList'
import Purchase from '@/components/Purchase'
import http from '@/http/http'  //工具

Vue.use(Router)
Vue.prototype.$http = http
export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve)
    },
      {
          path: '/Purchase',
          name: 'Purchase',
          component: resolve => require(['@/components/Purchase'], resolve)
      },
      {
          path: '/GameList',
          name: 'GameList',
          component: resolve => require(['@/components/GameList'], resolve)
      }
  ]
})
