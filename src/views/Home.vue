<template>
  <v-container grid-list-lg v-if="viewMode">
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="launch in launches" :key="launch.id">
        <LaunchCard
          :id="launch.id"
          :name="launch.name"
          :location="launch.location.name"
          :net="launch.net"
          :netstamp="launch.netstamp"
          :missions="launch.missions"
          :imageUrl="launch.rocket.imageURL"
          :imageSizes="launch.rocket.imageSizes"
          :tbddate="launch.tbddate"
          :lsp="launch.lsp.name"
        />
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12>
        <v-btn
          block
          large
          :loading="loading"
          @click="loadMoreLaunches"
        >
          Load More
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-lg v-else>
    <v-layout justify-center v-for="launch in launches" :key="launch.id">
      <v-flex xs12 sm10 md8 lg6 xl4>
        <LaunchCard
          :id="launch.id"
          :name="launch.name"
          :location="launch.location.name"
          :net="launch.net"
          :netstamp="launch.netstamp"
          :missions="launch.missions"
          :imageUrl="launch.rocket.imageURL"
          :imageSizes="launch.rocket.imageSizes"
          :tbddate="launch.tbddate"
          :lsp="launch.lsp.name"
        />
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6 xl4>
        <v-btn
          block
          large
          :loading="loading"
          @click="loadMoreLaunches"
        >
          Load More
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    LaunchCard: () => import('@/components/LaunchCard')
  },
  computed: {
    ...mapGetters(['launches', 'loading', 'viewMode'])
  },
  methods: {
    ...mapActions(['loadMoreLaunches'])
  }
}
</script>
