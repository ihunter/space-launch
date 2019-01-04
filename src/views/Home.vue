<template>
  <v-container grid-list-lg v-scroll="onScroll">
    <template v-if="viewMode">
      <v-layout justify-center row wrap>
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
    </template>

    <template v-else>
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
    </template>

    <v-fab-transition>
      <v-btn
        v-show="offsetTop >= 300"
        fab
        fixed
        bottom
        right
        @click="scrollToTop"
        color="primary"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    LaunchCard: () => import('@/components/LaunchCard/Index')
  },
  computed: {
    ...mapGetters(['launches', 'loading', 'viewMode'])
  },
  data () {
    return {
      offsetTop: 0
    }
  },
  methods: {
    ...mapActions(['loadMoreLaunches']),
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    scrollToTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
