import { createApp } from "vue";
import router from "./routers";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


 createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
