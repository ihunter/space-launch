<template>
  <v-card class="my-8" max-width="825">
    <v-toolbar height="auto" class="toolbar-top-offset mx-4" color="green" dark>
      <v-container fluid grid-list-xl>
        <v-layout v-bind="binding" align-center class="nowrap">
          <v-flex shrink>
            <v-avatar size="160" class="img-border elevation-16">
              <img src="https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_320.jpg" alt="avatar">
            </v-avatar>
          </v-flex>

          <v-flex>
            <div class="launch-info">
              <h3>{{ name }}</h3>
              <p>{{ lspName }} | {{ 'COUNTRY CODE' }}</p>
              <p>{{ locationName }}</p>
              <p>{{ netstamp | date }}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list>
      <v-list-item>
        <v-list-item-title>Status:</v-list-item-title>

        <v-list-item-subtitle>
          {{ "LAUNCH STATUS" }}
        </v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon color="red">mdi-close-circle</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>Mission Type:</v-list-item-title>

        <v-list-item-subtitle>
          Communications
        </v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon color="blue">mdi-satellite-variant</v-icon>
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
    lspName: {
      type: String,
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
    missionTypeName: {
      type: String,
      required: true
    },
    missions: {
      type: Array,
      required: true
    }
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.xsOnly) {
        binding.column = true
        binding['text-center'] = true
      } else {
        binding.row = true
      }

      return binding
    }
  }
}
</script>

<style scoped>
.nowrap {
  flex-wrap: nowrap;
}

.toolbar-top-offset {
  top: -16px;
}

.img-border img {
  border: 1px solid #cccccc;
}

.launch-info {
  margin-top: auto;
  margin-bottom: auto;
}

.launch-info h3 {
  margin-bottom: 16px;
}

.launch-info p {
  margin-bottom: 0;
}
</style>
