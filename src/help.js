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

if (checkNeed(needMockjs)) {
  const { mockXHR } = require('../mock')
  mockXHR()
}

if (checkNeed(needVconsole)) {
  const vConsole = require('vconsole')
  new vConsole()
}

if (checkNeed(needErrorLog)) {
  Vue.config.errorHandler = (err, vm, info) => {
    // todo 前端错误上报到收集报错的平台
    void store.dispatch('errorLog/addErrorLog', {
      err,
      info,
      url: location.href
    })
    console.error(err, info)
  }
}