export default [
    {
      path: "/",
      name: "GlossView",
      component: () => import("../views/GlossView.vue"),
      children: [],
    },
    {
      path: "/graph",
      name: "MindhView",
      component: () => import("../views/MindView.vue"),
      children: [],
    },
  ];