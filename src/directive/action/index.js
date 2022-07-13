import action from './action'

action.install = function (Vue) {
  Vue.directive('action', action)
}

export default action
