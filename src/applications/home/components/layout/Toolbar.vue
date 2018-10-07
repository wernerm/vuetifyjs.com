<template>
  <v-toolbar
    app
    color="primary"
    dark
  >
    <v-img
      class="shrink mr-2"
      contain
      height="46"
      width="46"
      src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
    />

    <span class="vuetify">Vuetify</span>

    <v-spacer />

    <v-toolbar-items>
      <v-btn
        flat
        to="/getting-started/quick-start"
      >
        Learn
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style lang="stylus" scoped>
  .vuetify
    font-family: 'Roboto Mono', monospace
    font-size: 16px
    text-transform: uppercase
    font-weight: 400
</style>
