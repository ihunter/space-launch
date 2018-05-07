import axios from 'axios'

export default {
  state: {
    launches: {},
    filters: {}
  },
  getters: {
    launches (state) {
      return state.launches.launches
    }
  },
  mutations: {
    setLaunches (state, payload) {
      state.launches = payload
    },
    setFilters (state, payload) {
      Object.assign(state.filters, payload)
    }
  },
  actions: {
    async getLaunches ({commit}, payload) {
      commit('setLoading', true)
      try {
        const launches = await axios.get(`https://launchlibrary.net/1.4/launch/next/10/`)
        commit('setLaunches', launches.data)
      } catch (error) {
        console.log(error)
      } finally {
        commit('setLoading', false)
      }
    },
    async addLaunches ({state, commit}) {
      commit('setLoadingMore', true)
      try {
        const launches = await axios.get(`https://launchlibrary.net/1.4/launch/next/${state.launches.count + 10}/`)
        commit('setLaunches', launches.data)
      } catch (error) {
        console.log(error)
      } finally {
        commit('setLoadingMore', false)
      }
    },
    async setFilters ({state, commit, dispatch}, payload) {
      commit('setLoading', true)
      if (payload.lsp === undefined || payload.lsp.length === 0) {
        dispatch('getLaunches')
        return
      }
      try {
        commit('setFilters', payload)
        let requests = []
        for (let filter in state.filters) {
          for (let lsp in state.filters[filter]) {
            requests.push(axios.get(`https://launchlibrary.net/1.4/launch/next/10?lsp=${state.filters[filter][lsp]}`))
          }
        }
        const request = await Promise.all(requests)
        let filteredLaunches = {launches: []}
        for (let req in request) {
          filteredLaunches.launches = filteredLaunches.launches.concat(request[req].data.launches)
        }
        filteredLaunches.launches = filteredLaunches.launches.sort((a, b) => {
          return a.netstamp > b.netstamp
        }).slice(0, 10)
        commit('setLaunches', filteredLaunches)
      } catch (error) {
        console.log(error)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
