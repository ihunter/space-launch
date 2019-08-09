<template>
  <v-layout column v-if="!loading">
    <v-flex>
      <v-img
        :src="launch.rocket.imageURL"
        lazy-src="https://picsum.photos/id/11/10/6"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        class="grey lighten-2"
        max-height="80vh"
      >
        <v-container fill-height>
          <v-layout column align-center class="image-content" v-if="!loading">
            <h1 class="display-1">{{ name }}</h1>
            <h2 class="headline">{{ status.description }}</h2>
            <v-spacer></v-spacer>
            <h3 class="display-2">
              {{ countdown }}
            </h3>
            <h4 class="title">{{ launch.isostart | date }}</h4>
          </v-layout>
        </v-container>
      </v-img>
    </v-flex>

    <v-flex>
      <v-container>
        <v-layout column>
          <v-card max-width="825" class="mt-12">
            <v-toolbar height="auto" class="toolbar-top-offset mx-4" :color="status.color" dark>
              <v-layout v-bind="binding" align-center class="nowrap">
                <v-flex shrink>
                  <v-avatar size="160" class="img-border elevation-16">
                    <img :src="launch.rocket.imageURL" alt="avatar">
                  </v-avatar>
                </v-flex>

                <v-flex>
                  <div class="launch-info">
                    <h3>{{ launch.lsp.name }}</h3>
                    <p>{{ launch.rocket.name }}</p>
                  </div>
                </v-flex>
              </v-layout>
            </v-toolbar>

            <v-subheader>Missions</v-subheader>

            <div v-for="mission in launch.missions" :key="mission.id">
              <v-card-title>{{ mission.name }}</v-card-title>

              <v-card-text>
                {{ mission.description }}
              </v-card-text>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Mission Type</v-list-item-title>

                  <v-list-item-subtitle>
                    {{ missionType(mission.type).name }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>
            </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from 'moment'

import { mapActions, mapGetters } from 'vuex'
import { setInterval } from 'timers'

export default {
  name: 'LaunchDetails',
  props: {
    launchID: {
      type: Number,
      required: true
    }
  },
  filters: {
    date (date) {
      return moment(date).format('MMMM Do, YYYY - h:mm A')
    }
  },
  data () {
    return {
      loading: true,
      currentTimestamp: moment()
    }
  },
  computed: {
    ...mapGetters('launches', ['launch']),
    ...mapGetters('launchStatuses', ['launchStatus']),
    ...mapGetters('missionTypes', ['missionType']),
    status () {
      return this.launchStatus(this.launch.status)
    },
    name () {
      if (this.$vuetify.breakpoint.xsOnly) {
        return this.launch.name.split('|').pop()
      }

      return this.launch.name
    },
    countdown () {
      const end = moment(this.launch.isostart)

      const diff = end.diff(this.currentTimestamp)
      const duration = moment.duration(diff)
      let days = Math.floor(duration.asDays()).toString()
      let hours = duration.hours().toString()
      let minutes = duration.minutes().toString()
      let seconds = duration.seconds().toString()

      days = days.length < 2 ? `0${days}` : days
      hours = hours.length < 2 ? `0${hours}` : hours
      minutes = minutes.length < 2 ? `0${minutes}` : minutes
      seconds = seconds.length < 2 ? `0${seconds}` : seconds
      return `${days}:${hours}:${minutes}:${seconds}`
    },
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.xsOnly) {
        binding.column = true
        binding['text-center'] = true
      } else {
        binding.row = true
      }

      return binding
    }
  },
  async created () {
    try {
      this.loading = true
      await this.getLaunch(this.launchID)
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }

    setInterval(this.updateTime, 500)
  },
  methods: {
    ...mapActions('launches', ['getLaunch']),
    updateTime () {
      this.currentTimestamp = moment()
    }
  }
}
</script>

<style scoped>
.nowrap {
  flex-wrap: nowrap;
}

.image-content {
  color: white;
}

.toolbar-top-offset {
  top: -32px;
}

.img-border img {
  border: 1px solid #cccccc;
}

.launch-info h3 {
  margin-bottom: 16px;
}

.launch-info p {
  margin-bottom: 0;
}
</style>
