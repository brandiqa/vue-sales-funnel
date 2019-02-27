import Vue from "vue";
import Router from "vue-router";
import Optin from "./views/Optin.vue";
import ThankYou from "./views/Thank-you.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "optin",
      component: Optin
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: ThankYou
    }
  ]
});
