// lib
import VActionSheet from './VActionSheet'
import VCouponPicker from './VCouponPicker'
import VTimer from './VTimer'

const components = [
  VActionSheet,
  VCouponPicker,
  VTimer,
]

const install = (Vue, opts = {}) => {
  if (install.installed) {
    return
  }
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}