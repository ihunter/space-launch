<template>
  <v-container grid-list-xl>
    <v-layout row justify-center>
      <v-flex shrink>
        <v-container class="mt-5">
          <v-layout column>
            <v-flex v-for="launch in launches" :key="launch.id" class="launch-card-margin">
              <LaunchCard
                :launchID="launch.id"
                :name="launch.name"
                :rocketImageURL="launch.rocket.imageURL"
                :lsp="launch.lsp"
                :locationName="launch.location.name"
                :netstamp="launch.netstamp"
                :statusID="launch.status"
                :missions="launch.missions"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    LaunchCard: () => import('@/components/LaunchCard')
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('launches', ['launches'])
  },
  async created () {
    try {
      this.loading = true
      await this.getLaunches()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launches', ['getLaunches'])
  }
}
</script>

<style scoped>
.launch-card-margin:not(:last-child) {
  margin-bottom: 32px;
}
</style>
