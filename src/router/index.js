import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '@/views/index'
import Aboutus from '@/views/Aboutus'
import followYourHeart from "@/views/followYourHeart"
import yearsOfLife from "@/views/yearsOfLife"
import technology from "@/views/technology"
Vue.use(VueRouter)

const routes = [
     {
      path: '/', redirect: '/Index/home'
     }
     ,{
        path: '/Index',
        name: 'Index',
        component: Home,
        children: [
        //首页
                {
                  // 当 /user/:id/profile 匹配成功，
                  // UserProfile 会被渲染在 User 的 <router-view> 中
                  path: 'home',
                  component: Index
                },
        //关于我们
                {
                    path:"aboutus",
                    component:Aboutus
                },
                {
                    path:"yearsOfLife",
                    component:yearsOfLife
                },
                {
                    path:"followYourHeart",
                    component:followYourHeart
                },
                {
                    path:"technology",
                    component:technology
                }
              ]
    },

]

const router = new VueRouter({
    routes
})

export default router