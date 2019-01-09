import moment from 'moment'

export default {
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
  }
}
