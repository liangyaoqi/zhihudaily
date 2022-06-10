import request from "../utils/request";

export default {
  itemData(id) {
    return request({
      url: `/story/${id}`, //接口url
      method: "GET", //请求方式get/post
      /* data, //参数
      headers: {
        "Content-Type": "application/json",
      }, */
    });
  },
};
