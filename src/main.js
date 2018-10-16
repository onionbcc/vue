// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入懒加载模块
import VueLazyload from 'vue-lazyload'

// 配置懒加载模块
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // 当图片请求失败的时候 用 error 里的地址代替图片
    error: require('../static/image/mo.jpg'),
    // error: require('../static/images/mo.jpg'),
    // 正在请求的时候加载的图片
    loading: require('../static/image/minloading.gif'),
    attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
