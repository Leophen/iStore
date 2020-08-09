import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/rem'
import components from '@/utils/components.js'

Vue.config.productionTip = false
Vue.use(components)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
