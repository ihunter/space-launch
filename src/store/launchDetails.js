import axios from 'axios'

export default {
  state: {
    launchDetails: {}
  },
  getters: {
    launchDetails (state) {
      return state.launchDetails
    }
  },
  mutations: {
    setLaunchDetails (state, payload) {
      state.launchDetails = payload
    }
  },
  actions: {
    async fetchLaunchDetails ({ commit }, payload) {
      console.log('fetching details', payload)
      commit('setLoading', true)
      try {
        const { launches } = (await axios.get(`https://launchlibrary.net/1.4/launch/${payload}`)).data
        commit('setLaunchDetails', launches[0])
      } catch (error) {
        console.error(error)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
