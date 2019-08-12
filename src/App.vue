<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer
      app
      disable-resize-watcher
      temporary
      v-model="drawer"
    >
      <v-list nav>
        <v-list-item :to="{ name: 'home' }" link exact>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item :to="{ name: 'launches' }" link exact>
          <v-list-item-icon>
            <v-icon>mdi-rocket</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Launches</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Space Launch Calendar</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text :to="{ name: 'home' }" exact>Home</v-btn>
        <v-btn text :to="{ name: 'launches' }" exact>Launches</v-btn>
      </v-toolbar-items>
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
