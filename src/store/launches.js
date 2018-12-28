import axios from 'axios'

export default {
  state: {
    launches: {}
  },
  getters: {
    launches (state) {
      return state.launches.launches
    },
    offset (state) {
      return parseInt(state.launches.offset)
    },
    count (state) {
      return state.launches.count
    }
  },
  mutations: {
    setLaunches (state, launches) {
      state.launches = launches
    },
    addLaunches (state, launches) {
      state.launches.offset = launches.offset
      state.launches.launches = state.launches.launches.concat(launches.launches)
    }
  },
  actions: {
    async loadLaunches ({ commit, dispatch }, limit = 5) {
      dispatch('setLoading', true)
      try {
        const launches = await axios.get(`https://launchlibrary.net/1.4/launch/next/${limit}`)
        commit('setLaunches', launches.data)
      } catch (e) {
        console.error(e)
      } finally {
        dispatch('setLoading', false)
      }
    },
    async loadMoreLaunches ({ commit, dispatch, getters }) {
      dispatch('setLoading', true)
      try {
        const count = getters.count
        const offset = getters.offset + count
        const launches = await axios.get(`https://launchlibrary.net/1.4/launch/next/${count}?offset=${offset}`)
        commit('addLaunches', launches.data)
      } catch (e) {
        console.error(e)
      } finally {
        dispatch('setLoading', false)
      }
    }
  }
}
