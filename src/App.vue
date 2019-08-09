<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
    >
      <v-list>
        <v-list-item :to="{ name: 'home' }" link exact>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'launches' }" link exact>
          <v-list-item-icon>
            <v-icon>mdi-rocket</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Launches</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

        <!-- If using vue-router -->
        <router-view></router-view>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      loading: true
    }
  },
  async created () {
    try {
      this.loading = true
      await this.getLaunchesStatuses()
      await this.getMissionTypes()
      await this.getAgencies()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launchStatuses', ['getLaunchesStatuses']),
    ...mapActions('missionTypes', ['getMissionTypes']),
    ...mapActions('agencies', ['getAgencies'])
  }
}
</script>
