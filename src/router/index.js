import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import EAL from "@/views/EAL.vue";
import Testimonials from "@/views/Testimonials.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eal",
    name: "EAL",
    component: EAL,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
