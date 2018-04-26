<template>
  <v-container fluid grid-list-lg>

    <v-layout v-if="loading" justify-center>
      <v-progress-circular
        indeterminate
        color="primary"
        :size="100"
      >
      </v-progress-circular>
    </v-layout>

    <v-layout v-else row wrap>
      <v-flex xs12 sm6 offset-sm3 v-for="launch in launches" :key="launch.id">

        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{ launch.name | title }}</v-toolbar-title>
          </v-toolbar>
          <v-container fluid>
            <v-layout align-center>
              <v-flex xs3>
                <v-card-media :src="launch.rocket.imageURL" height="200" />
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div>{{ launch.location.name }}</div>
                    <countdown :netstamp="launch.netstamp" />
                  </div>
                </v-card-title>
                <v-card-text>
                  <div v-if="launch.missions.length">
                    {{ launch.missions[0].description }}
                  </div>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
import {mapGetters} from 'vuex'
import Countdown from './Countdown'

export default {
  computed: {
    ...mapGetters(['launches', 'loading'])
  },
  components: {
    Countdown
  },
  filters: {
    title (value) {
      return value.split('|')[0]
    }
  }
}
</script>
