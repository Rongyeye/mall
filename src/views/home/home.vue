<template>
      <div id ='home'>
        <nav-bar class='homeNavBar'>
          <div slot='center'>购物街</div>
        </nav-bar>
        <home-swiper :banner = "banner" class='homeswiper'></home-swiper>
        <home-recommend :recommend ='recommend'></home-recommend>
        <tar-control :titles="['流行','新款','精选']" class='tar-control'></tar-control>
        <ul>
          <li v-for='item in lists'>{{item}}</li>
          
        </ul>
      </div>
</template>

<script>
  //import分类分开写
  //为什么用大括号导入，因为home.js里面export function ,不是export default.只有export default才能去掉大括号，自命名
//  import {getHomeMultidata} from 'network/home.js'
  
  //方法数据
  import {getHomeMultidata,getHomeGoods} from 'network/home.js'
  
//  components公共组件
  import NavBar from 'components/common/navbar/NavBar.vue'
  import tarControl from 'components/content/tarcontrol/tarControl.vue'
  
//  子组件
  import  homeSwiper from './childcomponents/homeSwiper.vue'
  import homeRecommend from './childcomponents/homeRecommend.vue'
  
  
    export default {
      name:'Home',
      data(){
        return {
          banner: [],
          result: '',
          recommend: [],
          lists: ['list', 'list', 'list', '' +
          'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list', 'list'],
          gooods: {
            'pops': {list: [], page: 0},
            'new': {list: [], page: 0},
            'sell': {list: [], page: 0}
          }
        }
      },
      components:{
//        'nav-bar':NavBar,
        NavBar,
        homeSwiper,
        homeRecommend,
        tarControl,
      },
      created(){
//         请求多个数据
//        把方法写在methods里再在生命周期函数里调用
        this.getHomeMultidata()
//        请求商品数据
        this.getHomeGoods('pops')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
      methods:{
        getHomeMultidata(){
          getHomeMultidata().then(res=>{
            console.log(res);
            this.result = res
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
          })
        },
        getHomeGoods(type){
          const page = this.goods[type].page+1
          getHomeGoods(type,page).then(res=>{
            console.log(res);
            this.goods[type].list.push(...res.data.list)//解析，...的作用是解析数据并把这些数据用，间隔，作为数组元素增加到list数组里
            this.goods[type].page +=1//增加页数，使得继续加载第二page的数据
          })
        }
      }
    };
</script>

<style scoped>
.homeNavBar{
  background-color: var(--color-tint);
  color:#fff;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
/*.homeswiper{*/
  /*position: absolute;*/
/*}*/
  .tar-control{
    position: sticky;
    /**/
    top: 44px;
    background-color: #fff;
  }
</style>
