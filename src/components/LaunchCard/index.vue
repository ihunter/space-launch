<template>
  <v-card height="100%" hover :to="{ name: 'launch', params: { id: id.toString() }}">
    <v-toolbar card height="100%">
      <v-toolbar-title class="toolbar__title">
        <p>{{ title }}</p>
        <p>{{ location }}</p>
        <p>{{ net | calendar }}</p>
      </v-toolbar-title>
    </v-toolbar>

    <v-img
      aspect-ratio="2"
      position="center center"
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
        <span class="text-xs-center launch-chip" :class="[tbddate ? 'launch-unconfirmed' : 'launch-confirmed']">
          {{ tbddate ? 'Launch Date Unconfirmed' : 'Go for Launch'}}
        </span>
      </div>
      <div class="countdown">
        <Countdown :eventTime="netstamp" />
      </div>
      <v-divider />
      <v-list three-line>
        <v-list-tile v-for="mission in missions" :key="mission.id">
          <v-list-tile-content>
            <v-list-tile-title>{{ mission.name }}</v-list-tile-title>
            <v-list-tile-sub-title><span class="mission-description">{{ mission.description }}</span></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="missions.length < 1">
          <v-list-tile-content>
            <v-list-tile-title>{{ name | missionName }}</v-list-tile-title>
            <v-list-tile-sub-title><span class="mission-description">Unknown Mission Description</span></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    net: {
      type: String,
      required: true
    },
    netstamp: {
      type: Number,
      required: true
    },
    missions: {
      type: Array,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    imageSizes: {
      type: Array,
      required: true
    },
    tbddate: {
      type: Number,
      required: true
    },
    lsp: {
      type: String,
      required: true
    }
  },
  filters: {
    calendar (net) {
      return moment(net, 'MMMM D, YYYY HH:mm:ss Z').format('MMMM D, YYYY, h:mm A')
    },
    missionName (name) {
      return name.split('|')[1]
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
      return `${this.lsp} | ${this.name.split('|')[0]}`
    },
    resizedImgUrl () {
      let size = this.imageSizes.reduce((prev, curr) => {
        return prev >= this.windowSize.x ? prev : curr <= this.windowSize.x ? curr : prev
      })
      let resizedImgUrl = this.imageUrl.replace(/(_)(\d+)(.)/, `$1${size}$3`)
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

.mission-description {
  font-size: 1.2em
}
</style>
