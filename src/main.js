import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
