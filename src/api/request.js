//引入axios
import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//引入stort获取id
import stort from '@/store'
///对axios进行二次封装
const requests=axios.create({
  baseURL:"/api",
  timeout:5000
})
// 添加请求拦截器
requests.interceptors.request.use(function (config) {
  //在发送请求时将id放在请求头带到服务器
  if (stort.state.detail.uuid_token) {
    config.headers.userTempId = stort.state.detail.uuid_token;
  }
  if (stort.state.user.token) {
    config.headers.token = stort.state.user.token;
  }
  //进度条开始
  nprogress.start()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //进度条结束
  nprogress.done()
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
//导出requests
export default requests