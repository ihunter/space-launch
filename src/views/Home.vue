<template>
  <v-layout column>
    <v-flex>
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    </v-flex>

    <v-flex class="margin-offset">
      <v-container grid-list-xl>
        <v-layout column align-center>
          <v-flex>
            <v-card max-width="850">
              <v-card-title class="display-3">Next upcoming launch</v-card-title>
              <v-card-text>
                <v-img
                  src="https://picsum.photos/id/11/500/300"
                  lazy-src="https://picsum.photos/id/11/10/6"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  max-width="825"
                  max-height="300"
                >
                  <v-container>
                    <v-layout>
                      <p>
                        {{ nextLaunch.name }}
                      </p>
                      <p>
                        <CountDown :endDate="nextLaunch.isostart" />
                      </p>
                    </v-layout>
                  </v-container>
                </v-img>
              </v-card-text>
              <v-card-actions>
                <v-btn text>Click</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    CountDown: () => import('@/components/CountDown')
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('launches', ['nextLaunch'])
  },
  async created () {
    try {
      this.loading = true
      await this.getLaunches()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launches', ['getLaunches'])
  }
}
</script>

<style scoped>
.margin-offset {
  margin-top: -192px;
}
</style>
