import Vue from 'vue'
import store from './store'
import { is } from './utils'
import settings from './settings'

// you can set in settings.js
// errorLog:'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings

function checkNeed() {
  const env = process.env.NODE_ENV
  if (is(needErrorLog, 'string')) {
    return env === needErrorLog
  }
  if (is(needErrorLog, 'array')) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = function (err, vm, info, a) {
    // Don't ask me why I use Vue.nextTick, it just a hack.
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      void store.dispatch('logs/addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      })
      console.error(err, info)
    })
  }
}
