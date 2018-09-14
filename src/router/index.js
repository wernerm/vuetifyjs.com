import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import scrollBehavior from './scroll-behavior'
import View from '@/components/core/View'

Vue.use(Router)

const languageRegex = /^\/([a-z]{2,3}|[a-z]{2,3}-[a-zA-Z]{4}|[a-z]{2,3}-[A-Z]{2,3})(?:\/.*)?$/

const release = process.env.RELEASE

function getLanguageCookie () {
  if (typeof document === 'undefined') return
  return new Map(document.cookie.split('; ').map(c => c.split('='))).get('currentLanguage')
}

export function createRouter (store, applications) {
  const children = Object.values(applications)
    .sort((a, b) => {
      if (a.routePriority > b.routePriority) return -1
      if (a.routePriority < b.routePriority) return 1
      return 0
    })
    .reduce((acc, cur) => acc.concat(cur.routes), [])

  const router = new Router({
    base: release ? `/releases/${release}` : __dirname,
    mode: release ? 'hash' : 'history',
    scrollBehavior,
    routes: [
      {
        path: '/:lang([a-z]{2,3}|[a-z]{2,3}-[a-zA-Z]{4}|[a-z]{2,3}-[A-Z]{2,3})',
        component: View,
        props: route => ({ lang: route.params.lang }),
        children
      },
      {
        path: '*',
        redirect: to => {
          let lang = getLanguageCookie() || 'en'
          if (!languageRegex.test('/' + lang)) lang = 'en'
          return `/${lang}${to.path}`
        }
      }
    ]
  })

  Vue.use(VueAnalytics, {
    id: 'UA-75262397-3',
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development',
      pageviewOnLoad: false
    },
    debug: process.env.DEBUG ? {
      enabled: true,
      trace: false,
      sendHitTask: true
    } : false
  })

  return router
}
