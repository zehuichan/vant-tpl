import amap from './amap'

const plugin = {
  install(Vue) {
    Vue.prototype.$amap = amap
    Vue.amap = amap
  },
  $amap: amap
}

export default plugin
export const install = plugin.install
