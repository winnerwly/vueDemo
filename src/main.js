import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/bootstrap.min.css'  
import '@/assets/js/jquery.min.js'  
import App from './App'
import router from './router'
import store from '@/store'
import $ from 'jquery'

Vue.use(VueAwesomeSwiper)
// 引用API文件
// 引用工具文件
import Utils from './utils'
// 将工具方法绑定到全局
Vue.prototype.$utils = Utils

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
