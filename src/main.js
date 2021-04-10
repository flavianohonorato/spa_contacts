import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import VTable from './components/VTable'

import './utils/axios'

Vue.config.productionTip = false
Vue.component('v-table', VTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
