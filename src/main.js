// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLoading from './plugins/loading/index'
import Prompt from './plugins/prompt/index'
import Mask from './plugins/mask/index'
import VueI18n from 'vue-i18n'
import Tool from './utils/Tool'

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.use(VueLoading)
Vue.use(Prompt)
Vue.use(Mask)

const i18n = new VueI18n({
  locale: 'CN',
  messages: {
    'CN': require('./../static/lang/cn'),
    'EN': require('./../static/lang/en')
  }
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    if (Tool.isLogin()) {
      next({path: '/'})
      return true
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
