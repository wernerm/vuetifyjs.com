<template>
  <v-app>
    <guide-toolbar />

    <guide-drawer />

    <v-content>
      <v-fade-transition mode="out-in">
        <page
          :app="app"
          :page="page"
          :namespace="namespace"
          :key="$route.path"
        />
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'

  const components = {
    Api: 'helpers/Api',
    Browsers: 'helpers/Browsers',
    Codepen: 'helpers/Codepen',
    Colors: 'helpers/Colors',
    Example: 'helpers/Example',
    Examples: 'helpers/Examples',
    Grid: 'helpers/Grid',
    Page: 'helpers/Page',
    Parameters: 'helpers/Parameters',
    Usage: 'helpers/Usage',
    WhyVuetify: 'helpers/WhyVuetify',
    GuideDrawer: 'layout/Drawer',
    GuideToolbar: 'layout/Toolbar',
    Group: 'layout/partials/Group',
    Item: 'layout/partials/Item',
    SubGroup: 'layout/partials/SubGroup'
  }

  Object.keys(components).forEach(key => {
    Vue.component(key, () => import(`./components/${components[key]}`))
  })

  export default {
    name: 'Guide',

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
