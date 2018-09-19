export default [
  {
    name: 'ThemeGenerator',
    path: 'theme-generator',
    component: () => import(
      /* webpackChunkName: "theme-generator" */
      '@/applications/theme-generator/App'
    )
  }
]
