import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Swipe,
  SwipeItem,
  Sticky,
  Image as VanImage,
  Icon,
  List,
  PullRefresh,
  Cell,
} from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Cell);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
