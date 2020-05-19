import Vue from 'vue'
import VueRouter from 'vue-router'
//懒加载
const Home = () => import('../views/home/home')
const Cart = () => import('../views/cart/cart')
const Category = () => import('../views/category/category')
const Profile = () => import('../views/profile/profile')
//安装插件
Vue.use(VueRouter)
const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  
]
//2.创建路由对象
const router = new VueRouter({
  routes,
  mode:'history'
})
//导出对象
export default router
