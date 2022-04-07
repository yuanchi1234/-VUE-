import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';
import Carsousel from "@/components/Carousel";
import Pagination from '@/components/Pagination'
import "swiper/css/swiper.css";

Vue.component(TypeNav.name,TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name,Pagination);

import router from '@/router';
import store from './store'

// Vue.config.productionTip = false

// import {reqCateGoryList} from '@/api'
//发起请求
// reqCateGoryList();
import '@/mock/mockServe';
new Vue({
  render: h => h(App),
    //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    // Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
