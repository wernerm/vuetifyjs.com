import Application from '@/lib/application'

export default new Application({
  routes: [
    {
      name: 'ThemeGenerator',
      path: 'theme-generator',
      component: () => import('@/applications/theme-generator/App')
    }
  ]
})
