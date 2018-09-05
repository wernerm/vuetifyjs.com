<template>
  <v-app>
    <guide-toolbar />

    <guide-drawer />

    <v-content>
      <core-page
        :app="app"
        :page="page"
      />
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import camelCase from 'lodash/camelCase'
  import upperFirst from 'lodash/upperFirst'

  Vue.component('Api', () => import('./helpers/Api'))
  Vue.component('Browsers', () => import('./helpers/Browsers'))
  Vue.component('Codepen', () => import('./helpers/Codepen'))
  Vue.component('Example', () => import('./helpers/Example'))
  Vue.component('Examples', () => import('./helpers/Examples'))
  Vue.component('Grid', () => import('./helpers/Grid'))
  Vue.component('Parameters', () => import('./helpers/Parameters'))
  Vue.component('Usage', () => import('./helpers/Usage'))
  Vue.component('WhyVuetify', () => import('./helpers/WhyVuetify'))

  export default {
    components: {
      GuideDrawer: () => import('./components/Drawer'),
      GuideToolbar: () => import('./components/Toolbar')
    },

    provide () {
      return {
        app: this.app,
        namespace: upperFirst(camelCase(this.namespace)),
        page: upperFirst(camelCase(this.page))
      }
    },

    props: {
      // Provided by router
      app: {
        type: String,
        default: undefined
      },
      namespace: {
        type: String,
        default: undefined
      },
      page: {
        type: String,
        default: undefined
      }
    }
  }
</script>
