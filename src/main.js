import Vue from 'vue'

// iconfont
import '@/assets/fonts/iconfont'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import 'vant/lib/index.css';
import '@/assets/less/index.less'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

import fastclick from 'fastclick'
fastclick.attach(document.body)

import { Lazyload } from 'vant'
Vue.use(Lazyload)

import {Toast, Dialog} from 'vant'

Vue.use(Toast)
Vue.use(Dialog)

// import './permission'

import WechatPlugin from '@/plugins/wechat/index'

Vue.use(WechatPlugin)

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
