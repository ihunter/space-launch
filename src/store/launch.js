import axios from 'axios'

export default {
  state: {
    launches: [],
    filters: [],
    offset: 0
  },
  getters: {
    launches (state) {
      if (state.filters !== undefined && state.filters.length !== 0) {
        let filteredLaunches = []
        for (let i = 0; i < state.filters.length; i++) {
          let filteredArray = state.launches.filter(launch => {
            return launch.lsp.abbrev === state.filters[i]
          })
          filteredLaunches = filteredLaunches.concat(filteredArray)
        }
        return filteredLaunches
      }
      return state.launches
    },
    filters (state) {
      return state.filters
    }
  },
  mutations: {
    setLaunches (state, payload) {
      state.launches = payload.launches
    },
    addLaunches (state, payload) {
      state.launches = state.launches.concat(payload.launches)
    },
    setFilters (state, payload) {
      state.filters = payload
    },
    setOffset (state, payload) {
      state.offset = payload
    },
    addOffset (state, payload) {
      state.offset += payload
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
    async addLaunches ({commit, state}) {
      commit('setLoadingMore', true)
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4/launch/next/10?offset=${state.offset + 10}`)
        commit('addOffset', 10)
        commit('addLaunches', response.data)
        commit('setLoadingMore', false)
      } catch (error) {
        commit('setLoadingMore', false)
        console.log(error)
      }
    },
    async setFilters ({commit}, payload) {
      commit('setLoading', true)
      try {
        commit('setFilters', payload)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        console.log(error)
      }
    }
  }
}
