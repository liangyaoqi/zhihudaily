import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Swipe,
  SwipeItem,
  Sticky,
  Image as VanImage,
  Icon,
  List,
  PullRefresh,
  Cell,
  Badge,
  Divider,
  Switch,
  ShareSheet,
  Button,
} from "vant";
Vue.use(Swipe);
Vue.use(Badge);
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(Divider);
Vue.use(Switch);
Vue.use(ShareSheet);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
