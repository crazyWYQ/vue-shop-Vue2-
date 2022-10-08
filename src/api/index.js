//api进行统一管理
import requests from "@/api/request";
import request from "@/api/request";
import mockRequest from "./mock";

//三级联动获取数据
export const reqCategoryList = () => request({ url: "/product/getBaseCategoryList", method: 'get' })

//轮播图数据接口
export const reqBanner = () => mockRequest({ url: "/Banner", method: 'get' })
//floor数据接口
export const reqFloor = () => mockRequest({ url: "/floor", method: 'get' })


//获取搜索组件的数据
export const reqSearchList = (value = {}) => request({ url: '/list', method: 'post', data: value })
//获取详情组件数据
export const reqGoodsInFo = (skuid) => request({ url: `/item/${skuid}`, method: 'get' })
//加入购物车(/api/cart/addToCart/{ skuId }/{ skuNum })
export const reqAddOrUpdata = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
//获取购物车组件数据
export const reqShopCartData = () => request({ url: '/cart/cartList', method: 'get' })
//删除Cart
export const reqDeleteCartById = (skuId) => request({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
//修改checked状态/api/cart/checkCart/{skuID}/{isChecked}
export const reqIsCheckById = (skuId, isChecked) => request({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });
//获取验证码/api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) => request({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
//注册/user/passport/register
export const reqRegister = (data) => request({ url: `/user/passport/register`, data, method: 'post' });
//登录/api/user/passport/login
export const reqUserLogin = (data) => request({ url: `/user/passport/login`, data, method: 'post' });
//携带token获取用户信息/api/user/passport/auth/getUserInfo
export const reqUserInfo = () => request({ url: "/user/passport/auth/getUserInfo", method: 'get' });
//退出登录/api/user/passport/logout
export const reqUserLogout = () => request({ url: '/user/passport/logout', method: 'get' });
//获取订单页信息/api/order/auth/trade
export const reqTradeData = () => request({ url: "/order/auth/trade", method: "get" });
///获取用户地址信息/api/user/userAddress/auth/findUserAddressList
export const reqUserAddress = () => request({ url: "/user/userAddress/auth/findUserAddressList", method: "get" });
//提交订单/api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post" });
//获取订单支付信息/api/payment/weixin/createNative/{orderId}
export const reqOrderPayData = (orderId) => request({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });
//获取订单支付状态/api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });
//获取订单列表/api/order/auth/{page}/{limit}
export const reqOrderList = ({ page, limit }) => request({ url: `/order/auth/${page}/${limit}`, method: 'get' });
