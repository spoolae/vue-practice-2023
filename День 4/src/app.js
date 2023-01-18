import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./components/App.vue";
import Students from "./components/Students.vue";

const routes = [{ path: "/", component: Students }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
