import bridge from './bridge'

function plugin(Vue) {
  if (plugin.installed) {
    return
  }
  Vue.prototype.$bridge = bridge
}

export default plugin