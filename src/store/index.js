import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import loading from './modules/loading'
import time from './modules/time'
import launches from './modules/launches'
import launchDetails from './modules/launchDetails'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    darkMode: true,
    viewMode: true
  },
  getters: {
    darkMode (state) {
      return state.darkMode
    },
    viewMode (state) {
      return state.viewMode
    }
  },
  mutations: {
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
    },
    toggleViewMode (state) {
      state.viewMode = !state.viewMode
    }
  },
  modules: {
    loading,
    time,
    launches,
    launchDetails
  }
})
