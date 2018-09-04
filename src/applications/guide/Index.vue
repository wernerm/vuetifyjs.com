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

  Vue.component('WhyVuetify', () => import('./helpers/WhyVuetify'))

  export default {
    components: {
      GuideDrawer: () => import('./components/Drawer'),
      GuideToolbar: () => import('./components/Toolbar')
    },
    props: {
      app: {
        type: String,
        default: undefined
      },
      page: {
        type: String,
        default: 'index'
      }
    }
  }
</script>
