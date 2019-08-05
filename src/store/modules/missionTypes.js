import axios from 'axios'

export default {
  state: {
    missionTypes: []
  },
  getters: {
    missionTypes (state) {
      return state.missionTypes
    }
  },
  mutations: {
    setMissionTypes (state, payload) {
      state.missionTypes = payload
    }
  },
  actions: {
    async getMissionTypes ({ commit }) {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/missiontype`)
        const missionTypes = response.data.types

        missionTypes.forEach(missionType => {
          switch (missionType.name) {
            case 'Earth Science':
              missionType.icon = 'mdi-earth'
              missionType.color = 'green'
              break
            case 'Planetary Science':
              missionType.icon = 'mdi-earth'
              missionType.color = 'deep-orange'
              break
            case 'Astrophysics':
              missionType.icon = 'mdi-telescope'
              missionType.color = 'purple'
              break
            case 'Heliophysics':
              missionType.icon = 'mdi-white-balance-sunny'
              missionType.color = 'amber'
              break
            case 'Human Exploration':
              missionType.icon = 'mdi-account'
              missionType.color = 'indigo'
              break
            case 'Robotic Exploration':
              missionType.icon = 'mdi-robot'
              missionType.color = 'blue-grey'
              break
            case 'Government/Top Secret':
              missionType.icon = 'mdi-bank'
              missionType.color = 'light-blue'
              break
            case 'Tourism':
              missionType.icon = 'mdi-passport'
              missionType.color = 'teal'
              break
            case 'Unknown':
              missionType.icon = 'mdi-help'
              missionType.color = 'deep-purple'
              break
            case 'Communications':
              missionType.icon = 'mdi-satellite-variant'
              missionType.color = 'blue'
              break
            case 'Resupply':
              missionType.icon = 'mdi-toolbox'
              missionType.color = 'pink'
              break
            case 'Suborbital':
              missionType.icon = 'mdi-orbit'
              missionType.color = 'orange'
              break
            case 'Test Flight':
              missionType.icon = 'mdi-rocket'
              missionType.color = 'light-blue accent-4'
              break
            case 'Dedicated Rideshare':
              missionType.icon = 'mdi-account-group'
              missionType.color = 'green accent-4'
              break
            case 'Navigation':
              missionType.icon = 'mdi-compass'
              missionType.color = 'red accent-4'
              break
            case 'Microgravity Research':
              missionType.icon = 'mdi-file-document-edit'
              missionType.color = 'indigo darken-4'
              break
            default:
              missionType.icon = 'mdi-help-circle'
              missionType.color = 'blue-grey'
          }
        })

        commit('setMissionTypes', missionTypes)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
