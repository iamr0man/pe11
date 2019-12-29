import Vue from "vue";
import VueRouter from "vue-router";
import EventCard from "../components/EventCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "eventCard",
    component: EventCard
  }
];

const router = new VueRouter({
  routes
});

export default router;
