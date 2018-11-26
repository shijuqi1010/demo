<template>
  <div>
    <div class="date">{{year}}年{{mounth}}月{{day}}日</div>
    <div class="date">{{hour}}时{{minute}}分{{second}}秒</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    change () {
      setTimeout(() => {  
        this.second += 1 
      }, 1000)
      if (this.second === 59) {
        this.second = 0
        this.minute += 1
        if (this.minute === 60) {
          this.minute = 0
          this.hour += 1
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
*{
  margin: 0 ;
  padding: 0;
}
.date{
  font-size: 30px;
  color: red;
}
</style>