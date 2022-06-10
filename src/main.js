import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Swipe, SwipeItem, Sticky } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
