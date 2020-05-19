<template>
  <div id = 'tarControl'>
    <div v-for="(item,index) in titles" class='tarItem' :class='{active:index === currentIndex}' @click = 'itemclick(index)'>
     <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'tarControl',
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemclick(index){
        this.currentIndex = index
      }
    }
  };
</script>

<style scoped>
#tarControl{
  display: flex;
  justify-content: space-around;
  padding:5px;
  font-size: 14px;
  
}

.active span{
  border-bottom: 1px solid var(--color-height-text);
}
  .active{
    /*如何引用已经定义好的样式变量*/
    color:var(--color-height-text)
  }
  /*一个标签有两个class选择器，那么在style写的样式顺序决定覆盖先后，说明css的样式会被后来者覆盖*/
/*.tarItem{*/
  /*color:blue;*/
/*}*/
</style>
