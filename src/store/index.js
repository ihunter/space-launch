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
    currentTime: moment().unix(),
    darkMode: false,
    viewMode: false
  },
  getters: {
    currentTime (state) {
      return state.currentTime
    },
    darkMode (state) {
      return state.darkMode
    },
    viewMode (state) {
      return state.viewMode
    }
  },
  mutations: {
    updateTime (state) {
      state.currentTime = moment().unix()
    },
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
    },
    toggleViewMode (state) {
      state.viewMode = !state.viewMode
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
