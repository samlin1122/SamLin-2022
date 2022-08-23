import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./lang";

import "./assets/main.scss";

const app = createApp(App);

app.use(i18n).mount("#app");
