import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

var routers = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: (resolve) => require(['@/page/Index'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@/page/user/Login'], resolve)
  },
  {
    path: '/legalTender',
    name: 'legalTender',
    component: (resolve) => require(['@/page/exchange/LegalTender'], resolve)
  },
  {
    path: '/coinToCoin',
    name: 'coinToCoin',
    component: (resolve) => require(['@/page/exchange/CoinToCoin'], resolve)
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: (resolve) => require(['@/page/user/UserCenter'], resolve)
  },
  {
    path: '/regist',
    name: 'regist',
    component: (resolve) => require(['@/page/user/Regist'], resolve)
  },
  {
    path: '/foundPassword',
    name: 'foundPassword',
    component: (resolve) => require(['@/page/user/FoundPassword'], resolve)
  },
  {
    path: '/entrustManage',
    name: 'entrustManage',
    component: (resolve) => require(['@/page/user/EntrustManage'], resolve)
  }
]

export default new Router({
  mode: 'history',
  routes: routers
})
