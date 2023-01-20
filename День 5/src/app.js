import { createRouter, createWebHashHistory } from "vue-router";
import { createApp } from "vue";
import Home from "./views/Home.vue";
import CityInfo from "./views/CityInfo.vue";
import App from "./App.vue";
import reset from "reset-css";

const routes = [
  { path: "/", component: Home },
  {
    path: "/weather/:city",
    component: CityInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(reset).mount("#app");
