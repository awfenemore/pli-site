import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/primary/Home.vue";
import AboutPli from "../components/primary/AboutPli.vue";
import AboutMe from "../components/primary/AboutMe.vue";
import AlbumoftheNow from "../components/primary/AlbumoftheNow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/aboutpli",
    name: "aboutpli",
    component: AboutPli
  },
  {
    path: "/aboutme",
    name: "aboutme",
    component: AboutMe
  },
  {
    path: "/albumofthenow",
    name: "albumofthenow",
    component: AlbumoftheNow
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
