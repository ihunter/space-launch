export default {
  state: {
    loading: false
  },
  getters: {
    loading (state) {
      return state.loading
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async setLoading ({ commit }, payload) {
      try {
        await commit('setLoading', payload)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
