import Application from '@/lib/application'

export default new Application({
  components: {
    GuideDrawer: () => import('./components/Drawer'),
    GuideToolbar: () => import('./components/Toolbar'),
    Api: () => import('./helpers/Api'),
    Browsers: () => import('./helpers/Browsers'),
    Codepen: () => import('./helpers/Codepen'),
    Colors: () => import('./helpers/Colors'),
    Example: () => import('./helpers/Example'),
    Examples: () => import('./helpers/Examples'),
    Grid: () => import('./helpers/Grid'),
    Parameters: () => import('./helpers/Parameters'),
    Usage: () => import('./helpers/Usage'),
    WhyVuetify: () => import('./helpers/WhyVuetify')
  },
  routes: [
    {
      name: 'Guide',
      path: ':namespace/:page',
      props: route => ({
        app: 'guide',
        namespace: route.params.namespace,
        page: route.params.page
      }),
      component: () => import('@/applications/guide/App')
    }
  ],
  routePriority: -1
})
