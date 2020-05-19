<template>
  <div id='tab-bar'>
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'Tabbar'
  };
</script>

<style  scoped>
  /*@import "../../assets/css/base.css";*/
  #tab-bar{
    display: flex;
    background-color: #f7f7f7;
    position:fixed;
    box-shadow: 0px -1px 1px rgba(100,100,100,.15);
    left: 0;
    right:0;
    bottom: 0;

  }


</style>
