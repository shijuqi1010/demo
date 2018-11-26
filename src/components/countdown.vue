<template>
  <div>
    <div class="count-down">截止时间
      <p class="time-text">{{countDownTime | outputHour}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDownTime: '15670',
      countTimer: '',
      year: 2018,
      mounth: 11,
      day: 16,
      hour: 15,
      minute: 7,
      second: 30
    }
  },
  created(){
    setInterval(this.change, 1000)
  },
  filters: {
    outputHour(val) {
      let hour = Math.floor(val / 60 / 60)
      let mintues = Math.floor((val / 60) % 60)
      let second = Math.floor(val % 60)
      hour = hour<10 ? '0' + hour : hour
      mintues = mintues < 10 ? '0' + mintues : mintues
      second = second < 10? '0' + second : second
      return `${hour}:${mintues}:${second}`
    },
  },
  mounted() {
    this.countDown()
  },
  methods: {
    countDown() {
      clearInterval(this.countTimer)
      if (this.countDownTime) {
        let countLooper = () => {
          this.countTimer = setInterval(() => {
            if (this.countDownTime > 0) {
              this.countDownTime -= 1
            } else {
              clearInterval(this.countTimer)
            }
          }, 1000)
        }
        countLooper()
      }
    },
  }
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
.count-down {
  position: absolute;
  right: 21px;
  top: 36px;
  color: green;
  font-size: 20px;
  font-weight: bold;
  .time-text{
    color: red;
    font-size: 24px;
    vertical-align: middle;
  }
}
</style>