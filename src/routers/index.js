import { createRouter, createWebHistory } from "vue-router";
import TeamShare from "../components/TeamShare.vue";
import LayoutHome from "../components/layouts/LayoutHome.vue";
import LayoutServe from "../components/layouts/LayoutServe";
import LayoutPeronal from "../components/layouts/LayoutPeronal";

const routes = [
  { path: "/", name: LayoutHome, component: LayoutHome },
  { path: "/team", name: TeamShare, component: TeamShare },
  { path: "/serve", name: TeamShare, component: LayoutServe },
  { path: "/personal", name: TeamShare, component: LayoutPeronal },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

console.log();
export default router;
