import Application from '@/lib/application'

export default new Application({
  components: {
    Hero: () => import('./helpers/Hero')
  },
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/applications/home/App')
    }
  ]
})
