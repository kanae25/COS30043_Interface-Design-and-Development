import { createApp } from "../assets/js/lib/vue.esm-browser.prod.js";
import App from "./components/App.js";
import router from "./router/index.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
