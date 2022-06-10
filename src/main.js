import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import { Swipe, SwipeItem, Sticky } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);
=======
import { Swipe, SwipeItem, Sticky, Icon } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(Icon);
>>>>>>> eec0c49fc2e4116d82156ce31bdb1ae116f7e8ef

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
