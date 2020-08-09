import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/loginedhome',
      name: 'loginedHome',
      component: () => import('./views/loginedhome.vue')
    },
    {
      path: '/ipadlist',
      name: 'iPadList',
      component: () => import('./components/Products/ipadlist.vue')
    },
    {
      path: '/iphonelist',
      name: 'iPhoneList',
      component: () => import('./components/Products/iphonelist.vue')
    },
    {
      path: '/airpodslist',
      name: 'AirpodsList',
      component: () => import('./components/Products/airpodslist.vue')
    },
    {
      path: '/alllist',
      name: 'AllList',
      component: () => import('./components/Products/alllist.vue')
    },
    {
      path: '/loginedalllist',
      name: 'loginedAllList',
      component: () => import('./components/Products/loginedalllist.vue')
    },
    {
      path: '/loginform',
      name: 'LoginForm',
      component: () => import('./components/footer/details/LoginForm.vue')
    },
    {
      path: '/logined',
      name: 'Logined',
      component: () => import('./components/footer/details/Logined.vue')
    },
    {
      path: '/regform',
      name: 'RegForm',
      component: () => import('./components/footer/details/RegForm.vue')
    },
    {
      path: '/shoppingbag',
      name: 'shoppingbag',
      component: () => import('./components/footer/shoppingbag/index.vue')
    },
    {
      path: '/loginedshoppingbag',
      name: 'loginedShoppingbag',
      component: () => import('./components/footer/shoppingbag/loginedshoppingbag.vue')
    },
    {
      path: '/detaila1',
      name: 'A1',
      component: () => import('./components/details/A1.vue')
    },
    {
      path: '/detaila2',
      name: 'A2',
      component: () => import('./components/details/A2.vue')
    },
    {
      path: '/detaila3',
      name: 'A3',
      component: () => import('./components/details/A3.vue')
    },
    {
      path: '/detaila4',
      name: 'A4',
      component: () => import('./components/details/A4.vue')
    },
    {
      path: '/detailb1',
      name: 'B1',
      component: () => import('./components/details/B1.vue')
    },
    {
      path: '/detailb2',
      name: 'B2',
      component: () => import('./components/details/B2.vue')
    },
    {
      path: '/detailb3',
      name: 'B3',
      component: () => import('./components/details/B3.vue')
    },
    {
      path: '/detailb4',
      name: 'B4',
      component: () => import('./components/details/B4.vue')
    },
    {
      path: '/detailb5',
      name: 'B5',
      component: () => import('./components/details/B5.vue')
    },
    {
      path: '/detailc1',
      name: 'C1',
      component: () => import('./components/details/C1.vue')
    },
    {
      path: '/detailc2',
      name: 'C2',
      component: () => import('./components/details/C2.vue')
    },
    {
      path: '/detailc3',
      name: 'C3',
      component: () => import('./components/details/C3.vue')
    },
    {
      path: '/detailc4',
      name: 'C4',
      component: () => import('./components/details/C4.vue')
    },
    {
      path: '/detailc5',
      name: 'C5',
      component: () => import('./components/details/C5.vue')
    },
    {
      path: '/detailc6',
      name: 'C6',
      component: () => import('./components/details/C6.vue')
    },
    {
      path: '/detaild1',
      name: 'D1',
      component: () => import('./components/details/D1.vue')
    },
    {
      path: '/detaild2',
      name: 'D2',
      component: () => import('./components/details/D2.vue')
    },
    {
      path: '/detaild3',
      name: 'D3',
      component: () => import('./components/details/D3.vue')
    },
    {
      path: '/detaild4',
      name: 'D4',
      component: () => import('./components/details/D4.vue')
    },
    {
      path: '/detaild5',
      name: 'D5',
      component: () => import('./components/details/D5.vue')
    },
    {
      path: '/detaild6',
      name: 'D6',
      component: () => import('./components/details/D6.vue')
    }
  ]
})
