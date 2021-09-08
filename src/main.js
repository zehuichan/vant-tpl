// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '@vant/touch-emulator'

import Vue from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import VComponents from 'vantui-components'
import '@/assets/less/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

// internationalization
import i18n from './lang'

import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.use(Vant)
Vue.use(VComponents)

import './permission'

import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// 跳转
Vue.prototype.$navigateTo = function (url, json, target = '_self') {
  if (target === '_self') {
    router.push({ path: url, query: json })
  } else {
    const { href } = router.resolve({ path: url, query: json })
    window.open(href, '_blank')
  }
}

// 返回
Vue.prototype.$navigateBack = function () {
  router.back()
}

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  const vConsole = require('vconsole')
  new vConsole()
}

console.info('vue', `v${Vue.version}`)
console.info('vant', `v${Vant.version}`)
console.info('@vcomponetns/vant-ui', VComponents.version)
console.info('Version', require('../package.json').version)

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
