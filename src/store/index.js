//引入vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
//使用Vuex
Vue.use(Vuex)
//引入各个模块
import home from './home'
import search from './search'
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
import trade from "./trade";
//向外暴露store
export default new Vuex.Store({
  modules:{
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
  }
})