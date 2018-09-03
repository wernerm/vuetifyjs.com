<template>
  <v-container fluid>
    <core-title>{{ structure.title }}</core-title>

    <component
      v-for="(child, i) in structure.children"
      :key="i"
      :is="getComponent(child.type)"
      :value="child"
    />
  </v-container>
</template>

<script>
  export default {
    provide () {
      return {
        namespace: this.structure.namespace
      }
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
    },

    computed: {
      structure () {
        if (!this.app) return {}

        const structure = require(`@/applications/${this.app}/pages/${this.page}.json`)

        return structure
      }
    },

    methods: {
      getComponent (type) {
        switch (type) {
          case 'section': return 'core-section'
          default: return 'div'
        }
      }
    }
  }
</script>
