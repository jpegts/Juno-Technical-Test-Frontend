import Home from "./views/Home.vue";
import Guide from "./views/Guide.vue";
import NotFound from "./views/NotFound.vue";
import Tasks from "./views/Tasks.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/guide", component: Guide, meta: { title: "Guide" } },
  {
    path: "/solution",
    component: Tasks,
    meta: { title: "Solution" },
  },
  { path: "/:path(.*)", component: NotFound },
];
