export default {
  state: {
    loading: false,
    loadingMore: false
  },
  getters: {
    loading (state) {
      return state.loading
    },
    loadingMore (state) {
      return state.loadingMore
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setLoadingMore (state, payload) {
      state.loadingMore = payload
    }
  }
}
