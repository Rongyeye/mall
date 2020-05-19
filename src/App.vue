<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <!--<router-view></router-view>-->

  </div>
</template>

<script>
//import mainTabbar from 'components/content/maintabbar/mainTabbar.vue'
import  mainTabbar from 'components/content/maintabbar/mainTabbar.vue'
//import mainTabbar from './components/content/maintabbar/mainTabbar.vue'
export default {
  name: 'App',
  components: {
    'main-tabbar':mainTabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
