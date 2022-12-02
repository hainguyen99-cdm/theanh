import { createApp } from "vue";
import router from "./routers";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import cors from "cors"
const corsOptions ={
   origin:'http://localhost:8080/', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
console.log(cors(corsOptions))

 createApp(App).use(router).mount('#app');
