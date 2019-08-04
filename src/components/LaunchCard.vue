<template>
  <v-card class="mt-8">
    <v-toolbar height="auto" class="toolbar-top-offset mx-4" color="red" dark>
      <v-container fluid grid-list-xl>
        <v-layout v-bind="binding" align-center>

          <v-flex shrink>
            <v-avatar size="160" class="img-border elevation-16">
              <img src="https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_320.jpg" alt="avatar">
            </v-avatar>
          </v-flex>

          <v-flex shrink fill-height>
            <div class="launch-info">
              <h3>Falcon 9 Block 5 | Amos-17</h3>
              <p>SpaceX | USA</p>
              <p>Cape Canaveral, FL, USA</p>
              <p>Aug. 5, 2019, 6:52 p.m.</p>
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
          TBD
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
      Amos-17 is a multi-band high-throughput satellite which will operate from 17°E, offering Ka-band, Ku-band, and C-Band services to users in Africa, the Middle East and Europe.
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
export default {
  name: 'LaunchCard',
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.xsOnly) {
        binding.column = true
        binding['text-center'] = true
      }

      return binding
    }
  }
}
</script>

<style scoped>
.toolbar-top-offset {
  top: -20px;
}

.img-border {
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
