import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/bootstrap.min.css'  
import '@/assets/js/jquery.min.js'  
import App from './App'
import router from './router'
import store from '@/store'
import $ from 'jquery'
import VueI18n from 'vue-i18n'
import message from './assets/lang'

Vue.use(VueI18n)

Vue.use(VueAwesomeSwiper)
// 引用API文件
// 引用工具文件
import Utils from './utils'
// 将工具方法绑定到全局
Vue.prototype.$utils = Utils

Vue.config.productionTip = false
console.log('store', store.state.locale)
console.log('this', this)
const i18n = new VueI18n({
  locale: store.state.locale,    // 语言标识
  messages: { ...message}
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
