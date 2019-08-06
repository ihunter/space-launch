<template>
  <v-container grid-list-xl>
    <v-layout row>
      <v-flex>
        <LaunchFilters />
      </v-flex>

      <v-flex shrink>
        <v-container class="mt-5">
          <v-layout column>
            <v-flex v-for="launch in launches" :key="launch.id" class="launch-card-margin">
              <LaunchCard
                :name="launch.name"
                :rocketImageURL="launch.rocket.imageURL"
                :lsp="launch.lsp"
                :locationName="launch.location.name"
                :netstamp="launch.netstamp"
                :status="launch.status"
                :missions="launch.missions"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex>
        <v-card>
          <v-card-title>I'm a title</v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Click</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    LaunchCard: () => import('@/components/LaunchCard'),
    LaunchFilters: () => import('@/components/LaunchFilters')
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('launches', ['launches'])
  },
  async mounted () {
    try {
      this.loading = true
      await this.getAgencies()
      await this.getMissionTypes()
      await this.getLaunchesStatuses()
      await this.getLaunches()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launches', ['getLaunches']),
    ...mapActions('launchStatuses', ['getLaunchesStatuses']),
    ...mapActions('missionTypes', ['getMissionTypes']),
    ...mapActions('agencies', ['getAgencies'])
  }
}
</script>

<style scoped>
.launch-card-margin:not(:last-child) {
  margin-bottom: 32px;
}
</style>
