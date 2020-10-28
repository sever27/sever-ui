import Toast from './Toast/index.js' 

const install = function(Vue) {

  Vue.prototype.$toast = Toast

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Toast,
  
}