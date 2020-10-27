import Toast from './Toast/main.js' 

const install = function(Vue) {

  let MmToast = Vue.extend(require('./Toast/Toast.vue').default);
  let mToast = new MmToast();
  let vm = mToast.$mount();
  let el = vm.$el;
  document.body.appendChild(el);

  
  Vue.prototype.$toast = Toast

}
console.log(typeof window !== 'undefined' , window.Vue)

if (typeof window !== 'undefined' && window.Vue) {
  console.log('123123')
  install(window.Vue);
}

export default {
  install,
  Toast,
}