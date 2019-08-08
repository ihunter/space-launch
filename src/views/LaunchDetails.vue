<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LaunchDetails',
  props: {
    launchID: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('launches', ['launch'])
  },
  async mounted () {
    try {
      this.loading = true
      await this.getLaunch(this.launchID)
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launches', ['getLaunch'])
  }
}
</script>

<style>
</style>
