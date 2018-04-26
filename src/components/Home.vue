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
        <LaunchCard :launch="launch" />
      </v-flex>

      <v-flex xs12 sm6 offset-sm3> 
        <v-btn @click="loadMore()">
          Load More
        </v-btn>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
import {mapGetters} from 'vuex'
import LaunchCard from './LaunchCard'

export default {
  methods: {
    loadMore () {
      this.$store.dispatch('loadMoreLaunches')
    }
  },
  computed: {
    ...mapGetters(['launches', 'loading'])
  },
  components: {
    LaunchCard
  }
}
</script>
