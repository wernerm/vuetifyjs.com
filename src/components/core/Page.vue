<template>
  <v-container fluid>
    <core-title>{{ structure.title }}</core-title>
    <div class="mb-5">
      <core-text
        v-if="structure.titleText"
        class="mb-4"
      >
        {{ structure.titleText }}
      </core-text>
    </div>

    <component
      v-for="(child, i) in structure.children"
      :key="i"
      :is="getComponent(child.type)"
      :value="child"
    />
  </v-container>
</template>

<script>
  import camelCase from 'lodash/camelCase'
  import upperFirst from 'lodash/upperFirst'

  // TODO: This is where 404 redirect will occur
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

        const page = upperFirst(camelCase(this.page))

        return require(`@/applications/${this.app}/pages/${page}.json`)
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
