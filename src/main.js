import Vue from 'vue'
import App from './App.vue'


!(function (win, doc) {
  function setFontSize() {
    var winWidth = doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px';
  }
  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
  var timer = null;
  win.addEventListener(evt, function () {
    clearTimeout(timer);
    timer = setTimeout(setFontSize, 300);
  }, false);
  setFontSize();
}(window, document));

new Vue({
  el: '#app',
  render: h => h(App)
})
