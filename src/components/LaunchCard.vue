<template>
  <v-card class="mt-8">
    <v-toolbar height="auto" class="toolbar-top-offset mx-4" color="green" dark>
      <v-container fluid grid-list-xl>
        <v-layout v-bind="binding" align-center>

          <v-flex shrink>
            <v-avatar size="160" class="img-border elevation-16">
              <img src="https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_320.jpg" alt="avatar">
            </v-avatar>
          </v-flex>

          <v-flex shrink fill-height>
            <div class="launch-info" v-if="!loading">
              <h3>{{ launch.name }}</h3>
              <p>{{ launch.lsp.name }} | {{ launch.lsp.countryCode }}</p>
              <p>{{ launch.location.name }}</p>
              <p>{{ launch.netstamp | date }}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list v-if="!loading">
      <v-list-item>
        <v-list-item-title>Status:</v-list-item-title>

        <v-list-item-subtitle>
          {{ launchStatus }}
        </v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon color="red">mdi-close-circle</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>Mission Type:</v-list-item-title>

        <v-list-item-subtitle>
          Communications
        </v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon color="blue">mdi-satellite-variant</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-card-text v-if="!loading">
      {{ launch.missions[0].description }}
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text>
        read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'LaunchCard',
  filters: {
    date (netstamp) {
      return moment.unix(netstamp).format('MMM Do, YYYY, h:mm a')
    }
  },
  data () {
    return {
      loading: true,
      launch: {},
      launchStatuses: []
    }
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.xsOnly) {
        binding.column = true
        binding['text-center'] = true
      }

      return binding
    },
    launchStatus () {
      const status = this.launch.status
      const statusName = this.launchStatuses[status - 1].name
      return statusName
    }
  },
  async mounted () {
    try {
      this.loading = true
      await this.getLaunch()
      await this.getLaunchStatuses()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    async getLaunch () {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launch/1388`)
        this.launch = response.data.launches.shift()
      } catch (error) {
        console.error(error)
      }
    },
    async getLaunchStatuses () {
      try {
        const response = await axios.get(`https://launchlibrary.net/1.4.1/launchstatus`)
        this.launchStatuses = response.data.types
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.toolbar-top-offset {
  top: -20px;
}

.img-border img {
  border: 1px solid #cccccc;
}

.launch-info {
  margin-top: auto;
  margin-bottom: auto;
}

.launch-info h3 {
  margin-bottom: 16px;
}

.launch-info p {
  margin-bottom: 0;
}
</style>
