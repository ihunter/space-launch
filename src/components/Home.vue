<template>
  <div>
    <v-container fluid grid-list-lg>

      <v-layout v-if="loading" justify-center>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
        >
        </v-progress-circular>
      </v-layout>

      <v-layout v-else row wrap v-scroll="onScroll">
        <v-flex xs12 sm6 offset-sm3 v-for="launch in launches" :key="launch.id">
          <LaunchCard :launch="launch" />
        </v-flex>

        <v-flex xs12 sm6 offset-sm3 class="text-xs-center"> 
          <v-btn @click="loadMore()" :loading="loadingMore" :disabled="loadingMore">
            Load More
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <v-fab-transition>
      <v-btn
        v-if="offsetTop >= 300"
        fab
        dark
        color="primary"
        bottom
        right
        fixed
        id="scroll-fab"
        @click="$vuetify.goTo(0)"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scroll-fab {
  margin-bottom: 20px;
}
</style>

<script>
import {mapGetters} from 'vuex'
import LaunchCard from './LaunchCard'

export default {
  data () {
    return {
      offsetTop: 0
    }
  },
  methods: {
    loadMore () {
      this.$store.dispatch('loadMoreLaunches')
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  },
  computed: {
    ...mapGetters(['launches', 'loading', 'loadingMore'])
  },
  components: {
    LaunchCard
  }
}
</script>
