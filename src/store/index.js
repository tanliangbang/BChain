import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import createLogger from '../plugins/store-logger/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
