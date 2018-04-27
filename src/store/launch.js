import axios from 'axios'

export default {
  state: {
    launches: {}
  },
  getters: {
    launches (state) {
      return state.launches.launches
    }
  },
  mutations: {
    setLaunches (state, payload) {
      state.launches = payload
    }
  },
  actions: {
    async loadLaunches ({commit}) {
      commit('setLoading', true)
      try {
        const response = await axios.get('https://launchlibrary.net/1.4/launch/next/10')
        commit('setLaunches', response.data)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    },
    async loadMoreLaunches ({commit, state}) {
      commit('setLoadingMore', true)
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4/launch/next/${state.launches.count + 10}`)
        commit('setLaunches', response.data)
        commit('setLoadingMore', false)
      } catch (error) {
        commit('setLoadingMore', false)
        console.log(error)
      }
    }
  }
}
