import axios from "axios";

// 设置请求基准路径
const serve = axios.create({
  baseURL: "https://apis.netstart.cn/zhihudaily",
  //请求时间
  timeout: 5000,
});
// 请求响应器
serve.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
serve.interceptors.response.use(
  (config) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加请求拦截器
// 拦截器的第一部分，第二部分在router index.js里面
/* axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 判断是否存在token,如果存在将每个页面header添加token
  if (window.localStorage.getItem("token")) {
    config.headers.common["Access-Token"] =
      window.localStorage.getItem("token");
  }
  return config;
}); */

//导出模块
export default serve;
