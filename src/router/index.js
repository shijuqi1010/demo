import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import test from '@/components/test'
import roll from '@/components/roll'
import loadmore from '@/components/loadmore'
import countdown from '@/components/countdown'
import swip from '@/components/swip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/swip',
      name: 'swip',
      component: swip
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/roll',
      name: 'roll',
      component: roll
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: loadmore
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: countdown
    }
  ]
})
