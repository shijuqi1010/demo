<template>
  <div class="vip-body">
    <ul class="vip-animation">
      <li class="animation">
        <div class="bubble">
        </div>
        <span class="text">
          paopao
        </span>
      </li>
    </ul>
    <div class="swiper">

    </div>
    <div class="rank">

    </div>
  </div>
</template>

<script>
export default {
  name: 'agree',
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped lang="less">
.vip-body{
  width: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  overflow: hidden;
  .vip-animation{
    border: 1px solid red;
    height: 200px;
    li{
      list-style: none;
      display: inline-block;
    }
    .animation{
      // border: 1px solid black;
      position: relative;
      animation-duration:3s; /*动画时间*/
      animation-fill-mode: both; /*播放后的状态*/
      animation-name: bubble;
      animation-direction: alternate;
      animation-timing-function:linear;
      animation-iteration-count: infinite; /*动作循环的次数：infinite 无限循环*/
      transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
      cursor: pointer;
      .bubble{
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: relative;
        background: greenyellow;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
      }
      .text{
        // line-height: 14px;
        font-size: 12px;
      }
    }
    .animation:hover{
      animation-duration:5s; /*动画时间*/
      // animation-fill-mode: both; /*播放后的状态*/
      animation-name: hidder;
      animation-direction: alternate;
      animation-timing-function:linear;
      animation-iteration-count: 1; /*动作循环的次数：infinite 无限循环*/
      transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
      cursor: pointer;
    }
  }
}
@keyframes bubble {
  from {
    left: 0;
    top: 0;
  } to {
    left: 0px;
    top: 30px;
  }
}
@-webkit-keyframes bubble {
  from {
    left: 0;
    top: 0;
  } to {
    left: 30px;
    top: 30px;
  }
}
@keyframes hidder {
  from {
    left: 0;
    top: 30;
    opacity: 1;
  } to {
    left: 0px;
    top: 50px;
    opacity: 0;
  }
}
</style>