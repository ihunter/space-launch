import Vue from 'vue'
import Vuex from 'vuex'

import launch from './launch'
import loading from './loading'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    launch,
    loading
  }
})
