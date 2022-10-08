//引入Vue
import Vue from "vue"
//引入路由
import VueRouter from "vue-router"
//引入routes
import routes from "./routes"
//使用路由
Vue.use(VueRouter)
//引入store
import store from "@/store"

///重写push|replace方法,不然多次点击会抛出NavigationDuplicated警告错误
let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject)
    originPush.call(this, location, resolve, reject)
  else
    originPush.call(this, location, () => { }, () => { })
}
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, resolve, rejuct) {
  if (resolve && rejuct) {
    originReplace.call(this, resolve, rejuct)
  } else {
    originReplace.call(this, () => { }, () => { })
  }
}
let router = new VueRouter({
  routes,
  //滚动行为，y代表滚动条在顶部
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})
//全局前置路由守卫
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.UserInfo.name;
  //判断有没有token  有就表示登录了 没有就没有登录
  if (token) {
    //看是否去login，登录了不能去，留在home页面
    if (to.path === '/login') {
      next('/home');
    } else {
      ///没有用户信息
      if (!name) {
        try {
          ///获取用户信息
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          //获取失败了代表token过期了需要重新登录
          //先清除用户信息
          await store.dispatch('UserLogout');
          next('/login');
        }
      } else {
        //存在用户信息直接放行
        next();
      }
    }
  }
  //没有登录
  else {
    //没有登录状态不能去结算页面、支付页面、个人订单页面
    // 将要去的地方保存在query参数，在登录时判断是否有参数，有直接去，没有就留在home
    let toPath = to.path;
    if (toPath.indexOf('/pay') != -1 || toPath.indexOf('/trade') != -1 || toPath.indexOf('/center') != -1) {
      next('/login?redirect=' + toPath);
    } else {
      next();
    }
  }

})
export default router