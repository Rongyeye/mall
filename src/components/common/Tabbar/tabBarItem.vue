<template>
  <div class='tab-bar-item' @click ='itemclick'>
    <!--插槽最好包在一个div里-->
    <div v-if ='!isactive'>
      <slot name = "item-icon" ></slot>
    </div>
    <div v-else>
      <slot  name = 'item-icon-active'></slot>
    </div>
    <div :style='activeColor'>
        <slot name = 'item-text'></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name:'tabBarItem',
    props:{
      link:String,
      activecolor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
//        isactive:false
      }

    },
    computed:{
      isactive(){
       return this.$route.path.indexOf(this.link) !==-1

      },
      activeColor(){
         return this.isactive?{color:this.activecolor}:{}
      }
    },
    methods:{
      itemclick(){
        console.log('itemclick')
        this.$router.replace(this.link)
//        this.isactive = !this.isactive

      }
    }
  };
</script>

<style  scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 26px;
    height: 26px;
    margin-top: 3px;
    vertical-align: middle;
  }
  /*.active{*/
    /*color: red;*/
  /*}*/
</style>
