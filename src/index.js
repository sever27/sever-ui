import Toast from "./app";
import _Vue from 'vue'

Main.install = Vue => {
if (!Vue) {
window.Vue = Vue = _Vue
}
Vue.component(Toast.name, Toast)
}
export default Toast;