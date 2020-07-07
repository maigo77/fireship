import Vue from "vue";
import Router from "vue-router";

import App from './App'

Vue.use(Router);

const routes = [
  { name: "home", path: "/home", component: App},
  { name: "any", path: "*", redirect: "/home" },
];

export default new Router({
  base: '',
  mode: "hash",
  routes: routes,
});
