<template>
  <v-app :dark="darkMode">
    <v-navigation-drawer app temporary v-model="drawer">
      <v-img
        contain
        aspect-ratio="1.5"
        :src="navicon"
      >
      </v-img>
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

      <v-btn icon @click="toggleViewMode" class="hidden-sm-and-down">
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

          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-tile avatar v-for="agency in agencies" :key="agency.id">
              <v-list-tile-action>
                <v-checkbox
                  @change="loadLaunches()"
                  v-model="agency.enabled"
                  hide-details
                ></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ agency.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-action>
                <v-switch
                  @change="loadLaunches()"
                  label="Hide TBA Launches"
                  v-model="hideTBASwitch"
                ></v-switch>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Hide TBA Launches</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-dialog>

      <v-menu left transition="slide-x-reverse-transition">
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
      filters: [],
      navicon: require('@/assets/icon.png')
    }
  },
  methods: {
    ...mapMutations(['toggleViewMode', 'toggleDarkMode', 'toggleTBA']),
    ...mapActions(['loadLaunches'])
  },
  computed: {
    ...mapGetters(['agencies', 'viewMode', 'darkMode', 'hideTBA']),
    hideTBASwitch: {
      get () {
        return this.hideTBA
      },
      set (value) {
        this.toggleTBA(value)
      }
    }
  }
}
</script>
