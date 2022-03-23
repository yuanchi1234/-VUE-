import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/pages/Home/TypeNav';

Vue.component(TypeNav.name,TypeNav);

import router from '@/router';

// Vue.config.productionTip = false

import {reqCateGoryList} from '@/api'
//发起请求
reqCateGoryList();
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
