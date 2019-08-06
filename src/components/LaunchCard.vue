<template>
  <v-card max-width="825">
    <v-toolbar height="auto" class="toolbar-top-offset mx-4" :color="launchStatus.color" dark>
      <v-layout v-bind="binding" align-center class="nowrap">
        <v-flex shrink>
          <v-avatar size="160" class="img-border elevation-16">
            <img :src="rocketImageURL" alt="avatar">
          </v-avatar>
        </v-flex>

        <v-flex>
          <div class="launch-info">
            <h3>{{ name }}</h3>
            <p>{{ lsp.name }} | {{ lsp.countryCode }}</p>
            <p>{{ locationName }}</p>
            <p>{{ netstamp | date }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-toolbar>

    <v-list>
      <v-list-item>
        <v-list-item-title>Status:</v-list-item-title>

        <v-list-item-subtitle>
          {{ launchStatus.name }}
        </v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon :color="launchStatus.color">
            {{ launchStatus.icon }}
          </v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>Mission Type:</v-list-item-title>

        <v-list-item-subtitle>
          {{ missionType.name }}
        </v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon :color="missionType.color">
            {{ missionType.icon }}
          </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-card-text>
      {{ missions[0].description }}
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text>
        read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'

import { mapGetters } from 'vuex'

export default {
  name: 'LaunchCard',
  filters: {
    date (netstamp) {
      return moment.unix(netstamp).format('MMM Do, YYYY, h:mm a')
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    rocketImageURL: {
      type: String,
      required: true
    },
    lsp: {
      type: Object,
      required: true
    },
    locationName: {
      type: String,
      required: true
    },
    netstamp: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    missions: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters('launchStatuses', ['launchStatuses']),
    ...mapGetters('missionTypes', ['missionTypes']),
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.xsOnly) {
        binding.column = true
        binding['text-center'] = true
      } else {
        binding.row = true
      }

      return binding
    },
    launchStatus () {
      return this.launchStatuses.find(type => {
        return type.id === this.status
      })
    },
    missionType () {
      return this.missionTypes.find(type => {
        return type.id === this.missions[0].type
      })
    }
  }
}
</script>

<style scoped>
.nowrap {
  flex-wrap: nowrap;
}

.toolbar-top-offset {
  top: -32px;
}

.img-border img {
  border: 1px solid #cccccc;
}

.launch-info h3 {
  margin-bottom: 16px;
}

.launch-info p {
  margin-bottom: 0;
}
</style>
