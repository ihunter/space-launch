import axios from 'axios'

export default {
  state: {
    agencies: []
  },
  getters: {
    agencies (state) {
      return state.agencies
    }
  },
  mutations: {
    setAgencies (state, payload) {
      state.agencies = payload
    }
  },
  actions: {
    async getAgencies ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/agency`)
        const agencies = response.data.agencies
        commit('setAgencies', agencies)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
