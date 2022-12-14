import { createApp } from "vue";
import App from "./App.vue";
import LoginComponent from "./pages/Login/LoginComponent.vue";
import router from "./router";
import { validateSession } from "./utils/Session";

if (validateSession()) {
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
} else {
  const app = createApp(LoginComponent);
  app.mount("#app");
}