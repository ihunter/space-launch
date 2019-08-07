import axios from 'axios'

export default {
  state: {
    agencies: [],
    curatedAgencies: [
      {
        id: 121,
        name: 'SpaceX',
        abbrev: 'SpX'
      },
      {
        id: 124,
        name: 'United Launch Alliance',
        abbrev: 'ULA'
      },
      {
        id: 147,
        name: 'Rocket Lab Ltd',
        abbrev: 'RL'
      },
      {
        id: 44,
        name: 'National Aeronautics and Space Administration',
        abbrev: 'NASA'
      },
      {
        id: 63,
        name: 'Russian Federal Space Agency (ROSCOSMOS)',
        abbrev: 'RFSA'
      },
      {
        id: 115,
        name: 'Arianespace',
        abbrev: 'ASA'
      }
    ],
    selectedAgencies: []
  },
  getters: {
    agencies (state) {
      return state.agencies
    },
    curatedAgencies (state) {
      return state.curatedAgencies
    },
    selectedAgencies (state) {
      return state.selectedAgencies
    }
  },
  mutations: {
    setAgencies (state, payload) {
      state.agencies = payload
    },
    setSelectedAgencies (state, payload) {
      state.selectedAgencies = payload
    }
  },
  actions: {
    async getAgencies ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/agency`)
        const agencies = response.data.agencies
        commit('setAgencies', agencies)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
