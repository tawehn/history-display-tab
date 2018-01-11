<template>
  <div class="clock">
    {{this.hours}}:{{this.minutes}}:{{this.seconds}}
  </div>  
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted () {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  },
  methods: {
    updateTime () {
      let now = new Date()
      this.hours = this.pad(now.getHours())
      this.minutes = this.pad(now.getMinutes())
      this.seconds = this.pad(now.getSeconds())
    },
    pad (num) {
      return num.toString().padStart(2, '0')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .clock {
    text-align: center;
  }

</style>

