import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import "./App.css";
import App from "./App.vue";
import Form from "./views/Form.vue";

const routes = [{ path: "/", component: Form }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
