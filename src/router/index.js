import Vue from 'vue'
// 引入路由模块
import Router from 'vue-router'
// 引入组件
import Index from '@/components/Index'
import Wx from '@/components/Wx'
import Me from '@/components/Me'


// 子组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'
import Client from '@/components/topics/Client'

// 文章详情组件
import Show from '@/components/topics/Show'

// loading 组件
import Loading from '@/components/Loading' 

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/index',
        name: 'Index',
        component: Index,
        children:[
            {
                path: '/',
                component: All,
            },
            {
                path: 'good',
                component: Good,
            },
            {
                path: 'share',
                component: Share,
            },
            {
                path: 'ask',
                component: Ask,
            },
            {
                path: 'job',
                component: Job,
            },
            {
                path: 'client',
                component: Client,
            },
            // 详情页路由
            {
                path: 'show/:id',
                component: Show
            }
            ]
        },
        {
            path: '/wx',
            name: 'Wx',
            component: Wx
        },
        {
            path: '/me',
            name: 'Me',
            component: Me
        },
        {
            path: '/loading',
            component: Loading
        },
        {
            path:'/*',
            redirect: '/index'
        }
    ]
})
