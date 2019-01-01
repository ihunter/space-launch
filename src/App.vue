<template>
  <v-app :dark="darkMode">
    <v-navigation-drawer app temporary v-model="drawer">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat scroll-off-screen>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        Space Launch Calendar
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggleViewMode">
        <v-icon>{{ viewMode ? 'view_day' : 'view_module' }}</v-icon>
      </v-btn>

      <v-dialog
        v-model="settings"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-btn icon slot="activator">
          <v-icon>filter_list</v-icon>
        </v-btn>

        <v-card>
          <v-toolbar>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="settings = false"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-container fluid>
            <v-layout row wrap>
              <v-flex>
                <v-checkbox
                  @change="loadLaunches()"
                  v-for="agency in agencies"
                  :key="agency.id"
                  :label="agency.name"
                  v-model="agency.enabled"
                  hide-details
                ></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>

      <v-menu>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile @click="toggleDarkMode">
            <v-list-tile-title>Dark Mode</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      settings: false,
      filters: []
    }
  },
  methods: {
    ...mapMutations(['toggleViewMode', 'toggleDarkMode']),
    ...mapActions(['loadLaunches'])
  },
  computed: {
    ...mapGetters(['agencies', 'viewMode', 'darkMode'])
  }
}
</script>
