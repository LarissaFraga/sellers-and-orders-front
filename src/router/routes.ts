const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/OrdersPage.vue') },
    ],
  },
  {
    path: '/info',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/InfoPage.vue') }],
  },
];

export default routes;
