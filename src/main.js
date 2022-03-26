import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';

Vue.component(TypeNav.name,TypeNav);

import router from '@/router';
import store from './store'

// Vue.config.productionTip = false

import {reqCateGoryList} from '@/api'
//发起请求
reqCateGoryList();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
