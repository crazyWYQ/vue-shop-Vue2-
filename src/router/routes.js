//引入组件
import HomeItem from "@/pages/Home/HomeItem";
import SearchItem from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import myOrder from "@/pages/Center/myOrder";
import teamOrder from "@/pages/Center/teamOrder/index.vue";
export default [
  {
    name: "Home",
    path: "/home",
    component: HomeItem,
    meta: { isShow: true },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Pay",
    path: "/pay",
    component: Pay,
    beforeEnter(to, from, next) {
      if (from.path == '/trade') {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    name: "PaySuccess",
    path: "/paysuccess",
    component: PaySuccess,
  },
  {
    name: "Center",
    path: "/center",
    component: Center,

    children: [
      {
        name: "myOrder",
        path: "myorder",
        component: myOrder,
      },
      {
        name: "teamOrder",
        path: "teamorder",
        component: teamOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      }
    ]
  },
  {
    name: "Trade",
    path: "/trade",
    component: Trade,
    beforeEnter: (to, from, next) => {
      //trade只能从shopcart进入
      if (from.path == '/shopcart')
        next();
      else
        next(false);
    },
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "ShopCart",
    path: "/shopcart",
    component: ShopCart,
    meta: { isShow: true },
  },
  {
    name: "AddCartSuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: { isShow: true },
  },
  {
    name: "Detail",
    path: "/detail/:skuid?",
    component: Detail,
    meta: { isShow: true },
  },
  {
    name: "Search",
    path: "/search/:KeyWord?",
    component: SearchItem,
    meta: { isShow: true },
  },
  //重定向
  {
    path: "/",
    redirect: "/home",
  },
];
