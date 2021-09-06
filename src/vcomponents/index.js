// lib
import VActionSheet from './VActionSheet'
import VAreaPicker from './VAreaPicker'
import VBadge from './VBadge'
import VCalendarPicker from './VCalendarPicker'
import VCard from './VCard'
import VCouponPicker from './VCouponPicker'
import VDatetimePicker from './VDatetimePicker'
import VForm from './VForm'
import VMapAddressPicker from './VMapAddressPicker'
import VPicker from './VPicker'
import VSvgIcon from './VSvgIcon'
import VTimer from './VTimer'
import VTimerPicker from './VTimerPicker'
import VToolBar from './VToolBar'
import VAutoComplete from './v-auto-complete'

const components = [
  VActionSheet,
  VAreaPicker,
  VBadge,
  VCalendarPicker,
  VCard,
  VCouponPicker,
  VDatetimePicker,
  VForm,
  VMapAddressPicker,
  VPicker,
  VSvgIcon,
  VTimer,
  VTimerPicker,
  VToolBar,
  VAutoComplete,
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