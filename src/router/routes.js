const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: '/user', component: () => import('pages/User.vue') },
      { path: "/races", component: () => import("pages/RacesPage.vue") },
      { path: "/classes", component: () => import("pages/ClassesPage.vue") },
      { path: "/equipment", component: () => import("pages/EquipmentsPage.vue") },
      { path: "/spells", component: () => import("pages/SpellsPage.vue") },
      { path: "/monsters", component: () => import("pages/MonstersPage.vue") },
      { path: '/classes/:class', component: () => import('pages/ClassPage.vue') },
      { path: '/spells/:spell', component: () => import('pages/SpellPage.vue') },
      { path: '/monsters/:monster', component: () => import('pages/MonsterPage.vue') },
      { path: '/races/:race', component: () => import('pages/RacePage.vue') },
      { path: '/equipment/:equipment', component: () => import('pages/EquipmentPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
