import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import kebabCase from 'lodash/kebabCase'

Vue.use(VueI18n)

export function createI18n (ssrContext, router) {
  const loadedLanguages = {} // our default language that is pre-loaded
  const globalLanguages = {}

  let locale
  if (ssrContext && ssrContext.lang) {
    locale = ssrContext.lang
  } else if (typeof document !== 'undefined') {
    locale = document.documentElement.lang
  }

  const i18n = new VueI18n({
    locale,
    fallbackLocale: 'en'
  })

  function setI18nLanguage (lang) {
    i18n.locale = lang
    axios.defaults.headers.common['Accept-Language'] = lang

    if (!ssrContext) {
      document.querySelector('html').setAttribute('lang', lang)
    }

    return lang
  }

  function loadLanguageAsync (name, lang) {
    const app = kebabCase(name)
    if (!loadedLanguages[app]) loadedLanguages[app] = []

    if (!loadedLanguages[app].includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/applications/${app}/lang/${lang}`).then(msgs => {
        loadedLanguages[app].push(lang)
        globalLanguages[name] = msgs.default
        i18n.setLocaleMessage(lang, globalLanguages)
        return Promise.resolve(setI18nLanguage(lang))
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }

  router.beforeEach((to, from, next) => {
    loadLanguageAsync(
      to.name,
      to.params.lang
    ).then(() => next())
  })

  return i18n
}
