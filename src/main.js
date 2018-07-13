// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'  //移动端适配（直接用px为单位就行，基于页面宽度为750px）
import emComponent from './plugin/popUp/index'  //自定义的弹框插件
import VueMeta from 'vue-meta'  //优雅的修改meta
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import qs from 'qs'  //qs 解决post请求后端接收不到的问题
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad,{
    error:'./static/img/miss.png',
    loading:'./static/img/miss.png'
})

Vue.use(emComponent)
Vue.use(VueMeta)

Vue.config.productionTip = false
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
