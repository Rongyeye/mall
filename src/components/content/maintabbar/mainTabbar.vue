<template>
  <div id ='mainTabbar'>
    <tab-bar>
      <tab-bar-item link='/home' activecolor ='red'>
        <img slot='item-icon' src="~assets/img/tabBar/home.png" alt="" >
        <img  slot='item-icon-active' src="~assets/img/tabBar/home-active.png" alt="" >
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item link='/category' activecolor ='blue'>
        <img src="~assets/img/tabBar/category.png" alt="" slot='item-icon'>
        <img src="~assets/img/tabBar/category-active.png" alt="" slot='item-icon-active'>
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item link='/cart' activecolor ='green'>
        <img src="~assets/img/tabBar/cart.png" alt="" slot='item-icon'>
        <img src="~assets/img/tabBar/cart-active.png" alt="" slot='item-icon-active'>
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item link='/profile' activecolor ='pink'>
        <img src="~assets/img/tabBar/profile.png" alt="" slot='item-icon'>
        <img src="~assets/img/tabBar/profile-active.png" alt="" slot='item-icon-active'>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>

  </div>
</template>

<script>
//  import Tabbar from '@/components/common/Tabbar/Tabbar.vue'
//  import  tabBarItem from '@/components/common/Tabbar/tabBarItem.vue'
  import Tabbar from 'components/common/Tabbar/Tabbar.vue'
  import  tabBarItem from 'components/common/Tabbar/tabBarItem.vue'
  export default {
    name:'mainTabbar',
    components:{
      'tab-bar': Tabbar,
      'tab-bar-item': tabBarItem
    }
  };
</script>

<style scoped>

</style>
