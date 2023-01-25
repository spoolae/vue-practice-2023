import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import "./App.css";
import App from "./App.vue";
import FormPage from "./views/FormPage.vue";

const routes = [{ path: "/", component: FormPage }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
