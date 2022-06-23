import VueRouter from "vue-router";
import Vue from "vue";

import MainBody from "../pages/MainBody";
import ContentItem from "../pages/ContentItem";
import CommentBody from "../pages/CommentBody";
import PersonalCenter from "../pages/PersonalCenter";
import Collection from "../pages/Collection";
import Message from "../pages/Message";
import Setting from "../pages/Setting";

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
      name: "contentitem",
      path: "/contentitem",
      component: ContentItem,
      children: [],
    },
    {
      name: "comment",
      path: "/comment",
      component: CommentBody,
    },
    {
      name: "personal",
      path: "/personal",
      component: PersonalCenter,
    },
    {
      name: "collection",
      path: "/collection",
      component: Collection,
    },
    {
      name: "message",
      path: "/message",
      component: Message,
    },
    {
      name: "setting",
      path: "/setting",
      component: Setting,
    },
  ],
});
export default router;
