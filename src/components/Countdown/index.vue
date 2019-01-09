<template>
  <div class="countdown">
    <span v-if="eventTime">
      {{ duration | countdown }}
    </span>
    <span v-else>
      TBA
    </span>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  props: {
    eventTime: {
      type: Number,
      required: true
    }
  },
  filters: {
    countdown (duration) {
      let days = Math.floor(duration.asDays()).toString()
      let hours = duration.hours().toString()
      let minutes = duration.minutes().toString()
      let seconds = duration.seconds().toString()
      days = days.length < 2 ? `0${days}` : days
      hours = hours.length < 2 ? `0${hours}` : hours
      minutes = minutes.length < 2 ? `0${minutes}` : minutes
      seconds = seconds.length < 2 ? `0${seconds}` : seconds
      return `${days}:${hours}:${minutes}:${seconds}`
    }
  },
  computed: {
    ...mapGetters(['currentTime']),
    duration () {
      return moment.duration(this.diff, 'seconds')
    },
    diff () {
      return this.eventTime - this.currentTime
    }
  }
}
</script>

<style scoped>
.countdown {
  font-family: 'Nova Mono', monospace;
  font-size: 3em;
}
</style>
