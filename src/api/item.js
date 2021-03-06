import request from "../utils/request";

export default {
  // 日报内容接口
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
  // 日报额外信息接口
  extra(id) {
    return request({
      url: `/story/${id}/extra`,
      method: "GET",
    });
  },
};
