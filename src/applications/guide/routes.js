export default [
  {
    name: 'Guide',
    path: ':namespace/:page',
    props: route => ({
      app: 'guide',
      namespace: route.params.namespace,
      page: route.params.page
    }),
    priority: -1,
    component: () => import(
      /* webpackChunkName: "guide" */
      '@/applications/guide/App'
    )
  }
]
