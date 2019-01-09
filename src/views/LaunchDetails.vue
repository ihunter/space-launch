<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 md10 lg6>
        <LaunchDetailsCard
          v-if="!loading"
          :launchDetails="launchDetails"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    LaunchDetailsCard: () => import('@/components/LaunchDetailsCard')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created () {
    this.fetchLaunchDetails(this.id)
  },
  computed: {
    ...mapGetters(['loading', 'launchDetails'])
  },
  methods: {
    ...mapActions(['fetchLaunchDetails'])
  }
}
</script>

<style>

</style>
