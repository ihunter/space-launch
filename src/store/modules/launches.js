import axios from 'axios'

export default {
  state: {
    launches: []
  },
  getters: {
    launches (state) {
      return state.launches
    }
  },
  mutations: {
    setLaunches (state, payload) {
      state.launches = payload
    }
  },
  actions: {
    async getLaunches ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launch/next/5`)
        const launches = response.data.launches
        commit('setLaunches', launches)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
