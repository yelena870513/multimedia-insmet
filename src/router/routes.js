
const routes = [
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'summary', component: () => import('pages/Summary.vue') },
      { path: 'chapter/:id', component: () => import('pages/Chapters.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
