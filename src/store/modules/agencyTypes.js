import axios from 'axios'

export default {
  state: {
    agencyTypes: []
  },
  getters: {
    agencyTypes (state) {
      return state.agencyTypes
    }
  },
  mutations: {
    setAgencyTypes (state, payload) {
      state.agencyTypes = payload
    }
  },
  actions: {
    async getAgencyTypes ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/agencytype`)
        const agencyTypes = response.data.types
        commit('setAgencyTypes', agencyTypes)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
