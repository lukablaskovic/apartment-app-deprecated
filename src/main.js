import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
Vue.use(vuetify);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

import { init } from "@emailjs/browser";
init("FLvpTOReV5it6hjvX");
