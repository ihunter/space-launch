import axios from 'axios'

export default {
  state: {
    launchStatuses: []
  },
  getters: {
    launchStatuses (state) {
      return state.launchStatuses
    },
    launchStatus (state) {
      return (id) => state.launchStatuses.find(s => s.id === id)
    }
  },
  mutations: {
    setLaunchesStatuses (state, payload) {
      state.launchStatuses = payload
    }
  },
  actions: {
    async getLaunchesStatuses ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launchstatus`)
        const launchStatuses = response.data.types

        launchStatuses.forEach(status => {
          switch (status.name) {
            case 'Go':
              status.icon = 'mdi-play-circle'
              status.color = 'green'
              break
            case 'TBD':
              status.icon = 'mdi-stop-circle'
              status.color = 'red'
              break
            case 'Success':
              status.icon = 'mdi-check-circle'
              status.color = 'green darken-4'
              break
            case 'Failure':
              status.icon = 'mdi-close-circle'
              status.color = 'red darken-4'
              break
            case 'Hold':
              status.icon = 'mdi-pause-circle'
              status.color = 'amber darken-1'
              break
            case 'In Flight':
              status.icon = 'mdi-send-circle'
              status.color = 'blue'
              break
            case 'Partial Failure':
              status.icon = 'mdi-alert-circle'
              status.color = 'deep-orange'
              break
            default:
              status.icon = 'mdi-help-circle'
              status.color = 'blue-grey'
          }
        })

        commit('setLaunchesStatuses', launchStatuses)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
