<template>
  <v-toolbar
    :app="$route.name !== 'Home'"
    color="white"
    flat
  >
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
