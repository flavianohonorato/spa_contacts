import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import VTable from './components/VTable'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import './utils/axios'

Vue.config.productionTip = false
Vue.component('v-table', VTable)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
