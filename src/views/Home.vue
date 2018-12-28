<template>
  <v-container grid-list-lg>
    <v-layout justify-center v-for="launch in launches" :key="launch.id">
      <v-flex xs12 sm10 md8 lg6 xl4>
        <LaunchCard
          :name="launch.name"
          :location="launch.location.name"
          :net="launch.net"
          :netstamp="launch.netstamp"
          :missions="launch.missions"
          :imageUrl="launch.rocket.imageURL"
          :tbddate="launch.tbddate"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    LaunchCard: () => import('@/components/LaunchCard')
  },
  computed: {
    ...mapGetters(['launches'])
  }
}
</script>
