import Vue from 'vue'
import store from './store'
import { is } from './utils'
import settings from './settings'

// you can set in settings.js
// errorLog: 'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings

function checkNeed() {
  const env = process.env.NODE_ENV
  if (is(needErrorLog, 'String')) {
    return env === needErrorLog
  }
  if (is(needErrorLog, 'Array')) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = (err, vm, info) => {
    // Don't ask me why I use Vue.nextTick, it just a hack.
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    // todo 前端错误上报到收集报错的平台
    void store.dispatch('errorLog/addErrorLog', {
      err,
      info,
      url: location.href
    })
    console.error(err, info)
  }
}
