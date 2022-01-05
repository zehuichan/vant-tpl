import Vue from 'vue'
import store from './store'
import { is } from './utils'
import settings from './settings'

// you can set in settings.js
// example value: 'production' | ['production', 'development']
const { mockjs: needMockjs, vconsole: needVconsole, errorLog: needErrorLog } = settings

function checkNeed(target) {
  const env = process.env.NODE_ENV
  if (is(target, 'String')) {
    return env === target
  }
  if (is(target, 'Array')) {
    return target.includes(env)
  }
  return false
}

console.log('mockjs', needMockjs, checkNeed(needMockjs))
if (checkNeed(needMockjs)) {
  const { mockXHR } = require('../mock')
  mockXHR()
}

console.log('vconsole', needVconsole, checkNeed(needVconsole))
if (checkNeed(needVconsole)) {
  const vConsole = require('vconsole')
  new vConsole()
}

console.log('error-log', needErrorLog, checkNeed(needErrorLog))
if (checkNeed(needErrorLog)) {
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