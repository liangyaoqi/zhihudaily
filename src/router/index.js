import VueRouter from "vue-router";
import Vue from "vue";

import MainBody from "../pages/MainBody";
import ContentItem from "../pages/ContentItem";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash", //路由模式,history模式下,路径不会被添加#号,默认为hash模式
  routes: [
    { path: "", redirect: "/mainbody" },
    {
      name: "mainbody",
      path: "/mainbody",
      component: MainBody,
      meta: {
        title: "主页面",
      },
    },
    {
      name: "contentitem/:id",
      path: "/mainbody/contentitem",
      component: ContentItem,
    },
  ],
});
export default router;
