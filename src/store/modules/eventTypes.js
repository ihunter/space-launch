import axios from 'axios'

export default {
  state: {
    eventTypes: []
  },
  getters: {
    eventTypes (state) {
      return state.eventTypes
    }
  },
  mutations: {
    setEventTypes (state, payload) {
      state.eventTypes = payload
    }
  },
  actions: {
    async getEventTypes ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/agencytype`)
        const eventTypes = response.data.types
        commit('setEventTypes', eventTypes)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
