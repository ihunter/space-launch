<template>
  <v-card height="100%">
    <v-toolbar card extended>
      <h3>{{ title }}</h3>
      <div slot="extension" class="toolbar-extension">
        <p>{{ launchDetails.location.name }}</p>
        <p>{{ launchDetails.net | calendar }}</p>
      </div>
    </v-toolbar>

    <v-img
      contain
      aspect-ratio="1.5"
      position="center top"
      v-if="intersected"
      v-resize="onResize"
      :src="resizedImgUrl"
      :lazy-src="placeholder"
    >
      <v-layout
        slot="placeholder"
        fill-height
        align-center
        justify-center
        ma-0
      >
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </v-layout>
    </v-img>

    <v-card-text>
      <v-divider />
      <div class="test-flex">
        <span class="text-xs-center" :class="[launchDetails.tbddate ? 'launch-unconfirmed' : 'launch-confirmed']">
          {{ launchDetails.tbddate ? 'Launch Date Unconfirmed' : 'Go for Launch'}}
        </span>
      </div>
      <div class="countdown">
        <Countdown :eventTime="launchDetails.netstamp" />
      </div>
      <v-divider />

      <v-tabs grow>
        <v-tab>
          Misson
        </v-tab>
        <v-tab>
          Agency
        </v-tab>
        <v-tab>
          Rocket
        </v-tab>
        <v-tab>
          Location
        </v-tab>

        <v-tab-item>
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex v-if="launchDetails.missions.length < 1">
                <v-card height="100%">
                  <v-toolbar card>
                    <v-toolbar-title>
                      Misson {{ 1 }} - {{ launchDetails.name | missionName }}
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    Unknown Mission Description
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                v-for="(mission, n) in launchDetails.missions"
                :key="mission.id">
                <v-card height="100%">
                  <v-toolbar card>
                    <v-toolbar-title>
                      Misson {{ n + 1 }} - {{ mission.name }}
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    {{ mission.description }}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <v-container>
            <v-layout>
              <v-flex>
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      {{ launchDetails.lsp.name }}
                    </v-toolbar-title>
                  </v-toolbar>

                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sit, deserunt amet dolores ipsam est ipsum sapiente iste at tempore. Voluptate eaque inventore officiis eius, aliquid eos soluta dicta nesciunt.
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      :href="info"
                      target="_blank"
                      v-for="info in launchDetails.lsp.infoURLs"
                      :key="info"
                    >
                      {{ info | infoUrlName }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              Rocket
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              Location
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  components: {
    Countdown: () => import('@/components/Countdown')
  },
  props: {
    launchDetails: {
      type: Object,
      required: true
    }
  },
  filters: {
    calendar (net) {
      return moment(net, 'MMMM D, YYYY HH:mm:ss Z').format('MMMM D, YYYY, h:mm A')
    },
    missionName (name) {
      return name.split('|')[1]
    },
    infoUrlName (infoUrl) {
      return infoUrl.match(/(\w+-*\w*).(com|net|org|gov)/)[1]
    }
  },
  data () {
    return {
      intersected: false,
      windowSize: {
        x: 0,
        y: 0
      },
      placeholder: require('@/assets/placeholder_320.png')
    }
  },
  methods: {
    onResize () {
      this.windowSize = { x: this.$el.clientWidth, y: this.$el.clientWidth }
    }
  },
  computed: {
    title () {
      return `${this.launchDetails.lsp.name} | ${this.launchDetails.name.split('|')[0]}`
    },
    resizedImgUrl () {
      let size = this.launchDetails.rocket.imageSizes.reduce((prev, curr) => {
        return prev >= this.windowSize.x ? prev : curr <= this.windowSize.x ? curr : prev
      })
      let resizedImgUrl = this.launchDetails.rocket.imageURL.replace(/(_)(\d+)(.)/, `$1${size}$3`)
      return resizedImgUrl
    }
  },
  mounted () {
    this.onResize()
    const observer = new IntersectionObserver(entries => {
      const launchCard = entries[0]
      if (launchCard.isIntersecting) {
        this.intersected = true
        observer.disconnect()
      }
    })

    observer.observe(this.$el)
  }
}
</script>

<style scoped>
.toolbar-extension p {
  padding: 0;
  margin: 0;
}

.launch-confirmed {
  padding: 5px 10px;
  color: white;
  border-radius: 15px;
  box-shadow: 0 3px 5px #aaaaaa;
  background-color: green;
  position: relative;
  top: -15px;

}
.launch-unconfirmed {
  padding: 5px 10px;
  color: white;
  border-radius: 15px;
  box-shadow: 0 3px 5px #aaaaaa;
  background-color: red;
  position: relative;
  top: -15px;
}

.countdown {
  display: flex;
  justify-content: center
}

.test-flex {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
</style>
