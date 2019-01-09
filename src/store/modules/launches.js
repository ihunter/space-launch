import axios from 'axios'
import moment from 'moment'

export default {
  state: {
    limit: 6,
    pagination: 0,
    launches: {},
    hideTBA: false
  },
  getters: {
    limit (state) {
      return state.limit
    },
    pagination (state) {
      return state.pagination
    },
    hideTBA (state) {
      return state.hideTBA
    },
    launches (state) {
      return state.launches.launches
    },
    getLaunchById (state) {
      return id => state.launches.launches.find(launch => launch.id === id)
    }
  },
  mutations: {
    setPagination (state, payload) {
      state.pagination = payload
    },
    setLaunches (state, launches) {
      state.launches = launches
    },
    addLaunches (state, launches) {
      state.launches.offset = launches.offset
      state.launches.launches = state.launches.launches.concat(launches.launches)
    },
    toggleTBA (state, payload) {
      state.hideTBA = payload
    }
  },
  actions: {
    async loadLaunches ({ commit, getters }) {
      commit('setLoading', true)
      commit('setPagination', 1)
      const filteredAgencies = getters.filteredAgencies
      const limit = getters.limit
      const requests = []
      try {
        filteredAgencies.forEach(agency => {
          requests.push(axios.get(`https://launchlibrary.net/1.4/launch/next/${limit}?lsp=${agency.abbrev}`))
        })

        const requestData = await Promise.all(requests)

        const filteredLaunches = {
          launches: []
        }
        requestData.forEach(agencyLaunches => {
          filteredLaunches.launches = filteredLaunches.launches.concat(agencyLaunches.data.launches)
        })

        filteredLaunches.launches = filteredLaunches.launches.sort((a, b) => {
          const dateA = moment(a.net, 'MMMM DD, YYYY HH:mm:ss Z')
          const dateB = moment(b.net, 'MMMM DD, YYYY HH:mm:ss Z')
          return dateA.diff(dateB)
        })

        if (getters.hideTBA) {
          filteredLaunches.launches = filteredLaunches.launches.filter(launch => {
            return launch.tbddate !== 1
          })
        }

        filteredLaunches.launches = filteredLaunches.launches.slice(0, limit)

        commit('setLaunches', filteredLaunches)
      } catch (e) {
        console.error(e)
      } finally {
        commit('setLoading', false)
      }
    },
    async loadMoreLaunches ({ commit, getters }) {
      commit('setLoadingButton', true)
      commit('setPagination', getters.pagination + 1)
      const filteredAgencies = getters.filteredAgencies
      const limit = getters.limit
      const pagination = getters.pagination
      const modifier = limit * pagination
      const requests = []
      try {
        filteredAgencies.forEach(agency => {
          requests.push(axios.get(`https://launchlibrary.net/1.4/launch/next/${modifier}?lsp=${agency.abbrev}`))
        })

        const requestData = await Promise.all(requests)

        const filteredLaunches = {
          launches: [],
          count: modifier
        }

        requestData.forEach(agencyLaunches => {
          filteredLaunches.launches = filteredLaunches.launches.concat(agencyLaunches.data.launches)
        })

        filteredLaunches.launches = filteredLaunches.launches.sort((a, b) => {
          const dateA = moment(a.net, 'MMMM DD, YYYY HH:mm:ss Z')
          const dateB = moment(b.net, 'MMMM DD, YYYY HH:mm:ss Z')
          return dateA.diff(dateB)
        })

        if (getters.hideTBA) {
          filteredLaunches.launches = filteredLaunches.launches.filter(launch => {
            return launch.tbddate !== 1
          })
        }

        filteredLaunches.launches = filteredLaunches.launches.slice(0, modifier)

        commit('setLaunches', filteredLaunches)
      } catch (e) {
        console.error(e)
      } finally {
        commit('setLoadingButton', false)
      }
    }
  }
}