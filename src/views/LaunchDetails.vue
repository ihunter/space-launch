<template>
  <v-layout column v-if="!loading">
    <v-flex>
      <v-img
        :src="launch.rocket.imageURL"
        lazy-src="https://picsum.photos/id/11/10/6"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        class="grey lighten-2"
        max-height="50vh"
      >
        <v-container fill-height>
          <v-layout column align-center class="image-content text-center" v-if="!loading">
            <h1 class="display-1">{{ name }}</h1>
            <h2 class="headline">{{ status.description }}</h2>
            <v-spacer></v-spacer>
            <h3 class="display-2">
              <CountDown :endDate="launch.isostart" />
            </h3>
            <h4 class="title">{{ launch.isostart | date }}</h4>
          </v-layout>
        </v-container>
      </v-img>
    </v-flex>

    <v-flex>
      <v-container>
        <v-layout column align-center>
          <v-card max-width="825" class="mt-12">
            <v-toolbar height="auto" class="toolbar-top-offset mx-4" :color="status.color" dark>
              <v-layout v-bind="binding" align-center class="nowrap">
                <v-flex shrink>
                  <v-avatar size="160" class="img-border elevation-16">
                    <img :src="launch.rocket.imageURL" alt="avatar">
                  </v-avatar>
                </v-flex>

                <v-flex>
                  <div class="launch-info text-center">
                    <h1 class="display-2">{{ launch.lsp.name }}</h1>
                    <h2 class="headline">{{ launch.rocket.name }}</h2>
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

export default {
  name: 'LaunchDetails',
  components: {
    CountDown: () => import('@/components/CountDown')
  },
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
      loading: true
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
  },
  methods: {
    ...mapActions('launches', ['getLaunch'])
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
