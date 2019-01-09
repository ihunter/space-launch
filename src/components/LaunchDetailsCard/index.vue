<template>
  <v-card height="100%">
    <v-toolbar card height="100%">
      <v-toolbar-title class="toolbar__title">
        <p>{{ title }}</p>
        <p>{{ launchDetails.location.name }}</p>
        <p>{{ launchDetails.net | calendar }}</p>
      </v-toolbar-title>
    </v-toolbar>

    <v-img
      contain
      aspect-ratio="2"
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

    <v-divider />
    <div class="test-flex">
      <span class="text-xs-center launch-chip" :class="[launchDetails.tbddate ? 'launch-unconfirmed' : 'launch-confirmed']">
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
        <MissionCard :missions="launchDetails.missions" />
      </v-tab-item>

      <v-tab-item>
        <AgencyCard :lsp="launchDetails.lsp" />
      </v-tab-item>

      <v-tab-item>
        <RocketCard :rocket="launchDetails.rocket" />
      </v-tab-item>

      <v-tab-item>
        <LocationCard :location="launchDetails.location" />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  components: {
    Countdown: () => import('@/components/Countdown'),
    MissionCard: () => import('./MissionCard'),
    AgencyCard: () => import('./AgencyCard'),
    RocketCard: () => import('./RocketCard'),
    LocationCard: () => import('./LocationCard')
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
.toolbar__title p {
  padding: 0;
  margin: 0;
}

.toolbar__title p:not(:first-child) {
  font-size: 0.8em;
}

.launch-chip {
  padding: 5px 10px;
  margin-top: 10px;
  color: white;
  border-radius: 15px;
  box-shadow: 0 3px 5px #aaaaaa;
  font-size: 1.5em;
}

.launch-confirmed {
  background-color: green;
}

.launch-unconfirmed {
  background-color: red;
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
