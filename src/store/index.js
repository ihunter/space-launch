import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import createPersistedState from 'vuex-persistedstate'

import launches from './launches'
import loading from './loading'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    currentTime: moment().unix()
  },
  getters: {
    currentTime (state) {
      return state.currentTime
    }
  },
  mutations: {
    updateTime (state) {
      state.currentTime = moment().unix()
    }
  },
  actions: {
    updateTime ({ commit }) {
      setInterval(() => {
        commit('updateTime')
      }, 1000)
    }
  },
  modules: {
    launches,
    loading
  }
})
