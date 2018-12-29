import axios from 'axios'
import moment from 'moment'

export default {
  state: {
    limit: 5,
    launches: {},
    agencies: [
      {
        id: 88,
        name: 'China Aerospace Science and Technology Corporation',
        countryCode: 'CHN',
        abbrev: 'CASC',
        enabled: false
      },
      {
        id: 121,
        name: 'SpaceX',
        countryCode: 'USA',
        abbrev: 'SpX',
        enabled: true
      },
      {
        id: 63,
        name: 'Russian Federal Space Agency (ROSCOSMOS)',
        countryCode: 'RUS',
        abbrev: 'RFSA',
        enabled: false
      },
      {
        id: 124,
        name: 'United Launch Alliance',
        countryCode: 'USA',
        abbrev: 'ULA',
        enabled: true
      },
      {
        id: 115,
        name: 'Arianespace',
        countryCode: 'FRA',
        abbrev: 'ASA',
        enabled: false
      },
      {
        id: 44,
        name: 'National Aeronautics and Space Administration',
        countryCode: 'USA',
        abbrev: 'NASA',
        enabled: false
      },
      {
        id: 31,
        name: 'Indian Space Research Organization',
        countryCode: 'IND',
        abbrev: 'ISRO',
        enabled: false
      }
    ]
  },
  getters: {
    limit (state) {
      return state.limit
    },
    agencies (state) {
      return state.agencies
    },
    filteredAgencies (state) {
      return state.agencies.filter(agency => agency.enabled)
    },
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
    async loadLaunches ({ commit, dispatch, getters }) {
      dispatch('setLoading', true)
      const filteredAgencies = getters.filteredAgencies
      const limit = getters.limit
      const requests = []
      try {
        filteredAgencies.forEach(agency => {
          requests.push(axios.get(`https://launchlibrary.net/1.4/launch/next/${limit}?lsp=${agency.abbrev}`))
        })

        const requestData = await Promise.all(requests)

        const filteredLaunches = {
          launches: [],
          total: 0,
          offset: 0,
          count: 0
        }

        requestData.forEach(agencyLaunches => {
          filteredLaunches.launches = filteredLaunches.launches.concat(agencyLaunches.data.launches)
          filteredLaunches.total += agencyLaunches.data.total
          filteredLaunches.offset = agencyLaunches.data.offset
          filteredLaunches.count += agencyLaunches.data.count
        })

        filteredLaunches.launches = filteredLaunches.launches.sort((a, b) => {
          const dateA = moment(a.net, 'MMMM DD, YYYY HH:mm:ss Z')
          const dateB = moment(b.net, 'MMMM DD, YYYY HH:mm:ss Z')
          return dateA.diff(dateB)
        }).slice(0, limit)

        commit('setLaunches', filteredLaunches)
      } catch (e) {
        console.error(e)
      } finally {
        dispatch('setLoading', false)
      }
    },
    async loadMoreLaunches ({ commit, dispatch, getters }) {
      dispatch('setLoading', true)
      const filteredAgencies = getters.filteredAgencies
      const limit = getters.limit
      const requests = []
      const offset = getters.offset + limit
      try {
        filteredAgencies.forEach(agency => {
          requests.push(axios.get(`https://launchlibrary.net/1.4/launch/next/${limit}?lsp=${agency.abbrev}&offset=${offset}`))
        })

        const requestData = await Promise.all(requests)

        const filteredLaunches = {
          launches: [],
          total: 0,
          offset: 0,
          count: 0
        }

        requestData.forEach(agencyLaunches => {
          filteredLaunches.launches = filteredLaunches.launches.concat(agencyLaunches.data.launches)
          filteredLaunches.total += agencyLaunches.data.total
          filteredLaunches.offset = agencyLaunches.data.offset
          filteredLaunches.count += agencyLaunches.data.count
        })

        filteredLaunches.launches = filteredLaunches.launches.sort((a, b) => {
          const dateA = moment(a.net, 'MMMM DD, YYYY HH:mm:ss Z')
          const dateB = moment(b.net, 'MMMM DD, YYYY HH:mm:ss Z')
          return dateA.diff(dateB)
        }).slice(0, limit)

        commit('addLaunches', filteredLaunches)
      } catch (e) {
        console.error(e)
      } finally {
        dispatch('setLoading', false)
      }
    }
  }
}
