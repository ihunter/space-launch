<template>
  <v-card height="100%">
    <v-toolbar card extended>
      <h3>{{ title }}</h3>
      <div slot="extension" class="toolbar-extension">
        <p>{{ location }}</p>
        <p>{{ net | calendar }}</p>
      </div>
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
        <span class="text-xs-center" :class="[tbddate ? 'launch-unconfirmed' : 'launch-confirmed']">
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
            <v-list-tile-sub-title>{{ mission.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="missions.length < 1">
          <v-list-tile-content>
            <v-list-tile-title>{{ name | missionName }}</v-list-tile-title>
            <v-list-tile-sub-title>Unknown Mission Description</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import Countdown from '@/components/Countdown'

import moment from 'moment'

export default {
  components: {
    Countdown
  },
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    name: {
      type: String,
      required: true,
      default: 'NAME'
    },
    location: {
      type: String,
      required: true,
      default: 'LOCATION'
    },
    net: {
      type: String,
      required: true,
      default: '0'
    },
    netstamp: {
      type: Number,
      required: true,
      default: 0
    },
    missions: {
      type: Array,
      required: true,
      default: () => []
    },
    imageUrl: {
      type: String,
      required: true,
      default: 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_320.png'
    },
    imageSizes: {
      type: Array,
      required: true,
      default: () => []
    },
    tbddate: {
      type: Number,
      required: true,
      default: 1
    },
    lsp: {
      type: String,
      required: true,
      default: 'LSP'
    }
  },
  filters: {
    calendar (net) {
      return moment(net).format('MMMM D, YYYY, h:mm A')
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
