import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import '../src/assets/iconfont/iconfont.css'
import '../src/assets/iconfont/task/iconfont.css'

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  axios,
  render: h => h(App),
}).$mount('#app')
