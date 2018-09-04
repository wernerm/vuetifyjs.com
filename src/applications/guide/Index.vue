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
