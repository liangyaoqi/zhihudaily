import request from "../utils/request";

export default {
  bannerData() {
    return request({
      url: `stories/latest`, //接口url
      method: "GET", //请求方式get/post
      /* data, //参数
      headers: {
        "Content-Type": "application/json",
      }, */
    });
  },
};

/* 1.Content-Type:application/json ：在axios中传入json数据

2.Content-Type:application/x-www-form-urlencoded : 传入参数以键值对形式

3.Content-Type:multipart/form-data：通常用来传输文件
 */
