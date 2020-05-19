<template>
  <div>
    <Swiper>
      <SwiperItem v-for='item in banner'>
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  
  export default {
    name:'homeSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banner:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  };
</script>

<style scoped>

</style>
