// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@vant/touch-emulator'

import Vue from 'vue'

// vant
import Vant from 'vant'
import 'vant/lib/index.css'
// vantui-components
import VComponents from 'vantui-components'
// global css
import './assets/less/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

// i18n
import i18n from './lang'

Vue.use(Vant)
Vue.use(VComponents)

import './permission'
import './mixin'

import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

if (process.env.NODE_ENV !== 'production') {
  const vConsole = require('vconsole')
  new vConsole()
}

Vue.config.productionTip = false
console.info('[INFO] ' + 'Vue', Vue.version)
console.info('[INFO] ' + 'Vant', Vant.version)
console.info('[INFO] ' + 'VComponents', VComponents.version)
console.info('[INFO]', __APP_INFO__)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')