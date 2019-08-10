<template>
  <span>
    {{ countdown }}
  </span>
</template>

<script>
import moment from 'moment'

export default {
  name: 'CountDown',
  props: {
    endDate: {
      type: String,
      default: ''
    }
  },
  filters: {
    date (date) {
      return moment(date).format('MMMM Do, YYYY - h:mm A')
    }
  },
  data () {
    return {
      currentTimestamp: moment()
    }
  },
  computed: {
    countdown () {
      const end = moment(this.endDate)

      const diff = end.diff(this.currentTimestamp)
      const duration = moment.duration(diff)
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
  async created () {
    setInterval(this.updateTime, 500)
  },
  methods: {
    updateTime () {
      this.currentTimestamp = moment()
    }
  }
}
</script>
