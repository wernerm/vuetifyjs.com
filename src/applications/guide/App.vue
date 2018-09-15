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

  const components = {
    Api: 'helpers/Api',
    Browsers: 'helpers/Browsers',
    Codepen: 'helpers/Codepen',
    Colors: 'helpers/Colors',
    Example: 'helpers/Example',
    Examples: 'helpers/Examples',
    Grid: 'helpers/Grid',
    Parameters: 'helpers/Parameters',
    Usage: 'helpers/Usage',
    WhyVuetify: 'helpers/WhyVuetify',
    GuideDrawer: 'layout/Drawer',
    GuideToolbar: 'layout/Toolbar'
  }

  Object.keys(components).forEach(key => {
    Vue.component(key, () => import(`./components/${components[key]}`))
  })

  export default {
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
