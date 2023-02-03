import { createApp } from "vue";
import App from "./App.vue";
import LoginComponent from "./pages/Login/LoginComponent.vue";
import router from "./router";
import { validateSession } from "./utils/Session";
import { createPinia } from "pinia";
import "ag-grid-community/styles/ag-grid.css";
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {JQJuly} from './utils/ExternalVariables.js';

const activeComponent = validateSession() ? App : LoginComponent;
const app = createApp(activeComponent);
const pinia = createPinia();

JQJuly.exec();
if (validateSession()) {
  app.use(router);
  app.use(pinia);
}

app.mount("#app");
