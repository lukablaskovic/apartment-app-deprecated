import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoatReservation from "../views/BoatReservation.vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

Vue.use(VueRouter);
Vue.use(Croppa);

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomeView,
  },
  {
    path: "/boat-reservation",
    name: "boat-reservation",
    component: BoatReservation,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
