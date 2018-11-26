import Vue from 'vue'

import 'vant/lib/index.css';
import '@/assets/less/index.less'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

import fastclick from 'fastclick'
fastclick.attach(document.body)

// import './permission'

import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
