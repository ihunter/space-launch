import axios from 'axios'

export default {
  state: {
    launchStatuses: []
  },
  getters: {
    launchStatuses (state) {
      return state.launches
    }
  },
  mutations: {
    setLaunchesStatuses (state, payload) {
      state.launches = payload
    }
  },
  actions: {
    async getLaunchesStatuses ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launchstatus`)
        const launchStatuses = response.data.types
        commit('setLaunchesStatuses', launchStatuses)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
