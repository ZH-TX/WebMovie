import Vue from 'vue'
import App from './App.vue'

import router from './routers'
import store from './stores'

// 将axios注册为全局组件
import axios from 'axios'
Vue.prototype.$axios=axios


// loading 注册为全局组件  Vue.component();

import loading from 'components/common/loading/loading'

Vue.component('loading',loading)


Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios.get('/api/cityList').then((res)=>console.log(res.data))