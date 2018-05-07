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
      state.agencies = payload.agencies
    }
  },
  actions: {
    async loadAgencies ({commit}) {
      commit('setLoading', true)
      try {
        const response = await axios.get('https://launchlibrary.net/1.4/lsp')
        commit('setAgencies', response.data)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    }
  }
}
