export default {
  state: {
    loading: false,
    loadingButton: false
  },
  getters: {
    loading (state) {
      return state.loading
    },
    loadingButton (state) {
      return state.loadingButton
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setLoadingButton (state, payload) {
      state.loadingButton = payload
    }
  }
}
