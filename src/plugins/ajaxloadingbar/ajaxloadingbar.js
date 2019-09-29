import Vue from 'vue';
import AjaxBar from '@/components/AjaxBar'

let AjaxBarConstructor = Vue.extend(AjaxBar)

let instance

const AjaxLoadingBar = function (options) {
  instance = new AjaxBarConstructor()
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

AjaxLoadingBar.start = function (speed) {
  instance.start(speed)
}

AjaxLoadingBar.stop = function () {
  instance.stop()
}

export default AjaxLoadingBar
