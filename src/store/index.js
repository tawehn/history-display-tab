import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import config from './modules/config'
import history from './modules/history'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    config,
    history
  },
  strict: debug,
  plugins: [createPersistedState({paths: ['config']})]

})