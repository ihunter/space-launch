<template>
  <v-layout fill-height>
    <v-img
      src="https://picsum.photos/id/11/500/300"
      lazy-src="https://picsum.photos/id/11/10/6"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      aspect-ratio="1"
      class="grey lighten-2"
      max-height="300"
    >
      <v-layout column align-center class="image-content" v-if="!loading">
        <h1 class="display-1">{{ launch.name }}</h1>
        <h2 class="headline">{{ status.description }}</h2>

        <v-divider></v-divider>

        <h3>00 : 00 : 00 : 00</h3>

        <h4>{{ launch.netstamp | date }}</h4>
      </v-layout>
    </v-img>
  </v-layout>
</template>

<script>
import moment from 'moment'

import { mapActions, mapGetters } from 'vuex'

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
      return moment.unix(date).format('MMMM Do, YYYY - h:mm a')
    }
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('launches', ['launch']),
    ...mapGetters('launchStatuses', ['launchStatuses', 'launchStatus']),
    status () {
      return this.launchStatuses.find(status => status.id === this.launch.status)
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
.image-content {
  color: white;
}
</style>
