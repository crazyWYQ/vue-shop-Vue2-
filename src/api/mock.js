//引入axios
import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
///对axios进行二次封装
const mockRequest=axios.create({
  baseURL:"/mock",
  timeout:5000
})
// 添加请求拦截器
mockRequest.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //进度条开始
  nprogress.start()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
mockRequest.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //进度条结束
  nprogress.done()
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
//导出requests
export default mockRequest