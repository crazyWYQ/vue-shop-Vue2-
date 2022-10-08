import Vue from 'vue'
import App from './App.vue'
//引入路由文件
import router from "@/router";
//引入store
import store from "@/store";
//引入mockServer.js---mock数据
import '@/mock/mockServer'
//引入swiper样式
import 'swiper/css/swiper.css'
//引入ui组件
import {MessageBox} from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入API文件
import * as API from './api'
Vue.config.productionTip = false
///全局注册三级联动组件
import TypeNav from "@/pages/Home/TypeNav/TypeNav";
Vue.component(TypeNav.name, TypeNav)
//注册分页组件
import Pagination from "@/components/Pagination"
Vue.component(Pagination.name, Pagination)
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
