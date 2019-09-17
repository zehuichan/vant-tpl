import bmap from './bmap'

const plugin = {
  install(Vue) {
    Vue.prototype.$bmap = bmap
    Vue.bmap = bmap
  },
  $bmap: bmap
}

export default plugin
export const install = plugin.install
