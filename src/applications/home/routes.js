export default [
  {
    name: 'Home',
    path: '/',
    component: () => import(
      /* webpackChunkName: "home" */
      '@/applications/home/App'
    )
  }
]
