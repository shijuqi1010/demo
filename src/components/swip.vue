<template>
  <div class="des-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in bannerList" :key="index">
        <a href="" :style="`background-image: url(${item.src})`" class="banner-img"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- <div class="swiper-list">
      <a v-for="(item, index) in bannerList" :key="index" href="" class="pos-list-item" :class="index === 0 ? 'current-preview' : ''" target='_blank'>
        <img class="pos-list-img" :src="item.src">
      </a>
    </div> -->
  </div>
</template>

<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper'
export default {  
  data() {  
    return { 
      bannerList:[
        {src:'https://img1.aylives.cn/a189773360374bdbab507ed91eb4deb4.png',title: '图一'},
        {src:'https://img1.aylives.cn/3d2f02776bcc4ea8a6d3de67be41ed89.png',title: '图二'},
        {src:'https://img1.aylives.cn/a189773360374bdbab507ed91eb4deb4.png',title: '图三'},
        {src:'https://img1.aylives.cn/a189773360374bdbab507ed91eb4deb4.png',title: '图四'},
        {src:'https://img1.aylives.cn/a189773360374bdbab507ed91eb4deb4.png',title: '图五'}
      ],
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        speed:1000,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        loop : true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      } 
    }  
  },
  components: {
    swiper,
    swiperSlide
  },
  method: {
  }
}
</script>

<style>
.des-swiper{
  width: 1231px;
  height: 370px;
  display: flex;
  background-color: #fff;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
}
.banner-img{
  position: relative;
  width: 1067px;
  height: 368px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
  .swiper-container {
    /* width: 100%;
    height: 100%;  */
    position: relative;
    width: 1067px;
    height: 368px;
    overflow: hidden;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #ddd;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-list{
    width: 164px;
    height: 100%;
    background: #fff;
    margin-left: 10px;
  }
  .pos-list-item{
    height: 65px;
    margin-top: 10px;
    display: block;
    box-sizing: border-box;
    transition: all .3s ease;
  }
  .pos-list-item:first-child{
    margin-top: 0;
  }
  .pos-list-img{
    width:100%;
    height: 100%;
    pointer-events: none;
  }
  </style>