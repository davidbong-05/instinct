import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Prototype from "@/views/Prototype.vue";
import DoItYourself from "@/views/DoItYourself.vue"
import Resources from "@/views/Resources.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/prototype",
    name: "Prototype",
    component: Prototype,
  },
  {
    path: "/diy",
    name: "DIY",
    component: DoItYourself,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;