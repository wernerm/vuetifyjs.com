<template>
  <v-app>
    <home-toolbar />

    <v-content>
      <hero />

      <feature />

      <sponsors />

      <made-with-vuetify />
    </v-content>

    <home-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      Feature: () => import('./components/helpers/Feature'),
      Hero: () => import('./components/helpers/Hero'),
      MadeWithVuetify: () => import('./components/helpers/MadeWithVuetify'),
      Sponsors: () => import('./components/helpers/Sponsors'),

      HomeFooter: () => import('./components/layout/Footer'),
      HomeToolbar: () => import('./components/layout/Toolbar')
    }
  }
</script>

<style lang="stylus">
  .mono
    font-family: 'Roboto Mono', monospace !important
</style>
