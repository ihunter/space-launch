<template>
  <v-layout column>
    <v-flex>
      <v-parallax :src="parallaxImage">
        <v-layout row justify-center align-center class="text-center">
          <v-flex>
            <h1 class="website-title display-3 font-weight-black">Space Launch Calendar</h1>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-flex>

    <v-flex class="margin-offset">
      <v-container grid-list-xl>
        <v-layout column align-center>
          <v-flex>
            <v-card max-width="850">
              <v-card-title class="display-3 text-center">
                Next upcoming launch
              </v-card-title>
              <v-card-text>
                <NextLaunch />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'home',
  components: {
    NextLaunch: () => import('@/components/NextLaunch')
  },
  data () {
    return {
      parallaxImage: require('@/assets/grand_tour.jpg')
    }
  }
}
</script>

<style scoped>
.website-title {
  margin-bottom: 10rem;
  text-shadow: 5px 5px 10px black;
}

.margin-offset {
  margin-top: -192px;
}
</style>
