import axios from 'axios'

export default {
  state: {
    launches: [],
    launch: {},
    nextLaunch: {}
  },
  getters: {
    launches (state) {
      return state.launches
    },
    launch (state) {
      return state.launch
    },
    nextLaunch (state) {
      return state.nextLaunch
    }
  },
  mutations: {
    setLaunches (state, payload) {
      state.launches = payload
    },
    setLaunch (state, payload) {
      state.launch = payload
    },
    setNextLaunch (state, payload) {
      state.nextLaunch = payload
    }
  },
  actions: {
    async getLaunches ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launch/next/5`)
        const launches = response.data.launches
        commit('setLaunches', launches)
      } catch (error) {
        console.error(error)
      }
    },
    async getLaunch ({ commit }, launchID) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launch/${launchID}`)
        const launch = response.data.launches.shift()
        commit('setLaunch', launch)
      } catch (error) {
        console.error(error)
      }
    },
    async getNextLaunch ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launch/next/1`)
        const nextLaunch = response.data.launches.shift()
        commit('setNextLaunch', nextLaunch)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
