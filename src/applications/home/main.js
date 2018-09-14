import Application from '@/lib/application'

export default new Application({
  components: {
    HomeFooter: () => import('./components/Footer'),
    HomeToolbar: () => import('./components/Toolbar'),
    Feature: () => import('./helpers/Feature'),
    Hero: () => import('./helpers/Hero'),
    MadeWithVuetify: () => import('./helpers/MadeWithVuetify'),
    Sponsors: () => import('./helpers/Sponsors')
  },
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/applications/home/App')
    }
  ]
})
