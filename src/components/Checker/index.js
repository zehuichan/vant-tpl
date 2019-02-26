import Checker from './checker'
import CheckerItem from './checker-item'

Checker.install = function (Vue) {
  Vue.component(Checker.name, Checker)
}

CheckerItem.install = function (Vue) {
  Vue.component(CheckerItem.name, CheckerItem)
}

export {
  Checker,
  CheckerItem
}
