<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{ launch.name | title }}</v-toolbar-title>
    </v-toolbar>

    <!-- <v-parallax :src="launch.rocket.imageURL" :alt="launch.rocket.name" height="300">
    </v-parallax> -->

    <v-card-media
      :src="launch.rocket.imageURL"
      :alt="launch.rocket.name" 
      height="300"
    >
    </v-card-media>

    <v-card-title primary-title>
      <div>
        <div>{{ launch.location.name }}</div>
          Countdown: <countdown :netstamp="launch.netstamp" />
      </div>
    </v-card-title>
    <v-card-text>
      <div v-if="launch.missions.length">
        {{ launch.missions[0].description }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Countdown from './Countdown'

export default {
  props: ['launch'],
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

<style scoped>
</style>
