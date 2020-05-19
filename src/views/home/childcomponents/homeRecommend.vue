<template>
  <div class='recommend'>
    <div v-for='item in recommend'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'homeRecommend',
    components:{
    
    },
    props:{
      recommend:{
        type:Array,
        default(){
          return[]
        }
      }
     
    }
    
  };
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content: space-around;
  width:100%;
  /*height:100px;*/
  padding:10px 0px 26px;
  font-size: 12px;
  border-bottom: 6px solid #eee;
}
.recommend img{
    width:50px;
    height: 50px;
    margin-bottom: 5px;
  }
a{
  text-decoration:none;
  color:#666;
}
</style>
