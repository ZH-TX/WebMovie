import Vue from 'vue'
import App from './App.vue'

import router from './routers'
import store from './stores'


import axios from 'axios'

Vue.prototype.$axios=axios




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios.get('api/cityList').then((res)=>console.log(res.data))