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
  // Utilities
  import { getComponent } from '@/util/helpers'
  import kebabCase from 'lodash/kebabCase'

  // TODO: This is where 404 redirect will occur
  export default {
    inject: ['app', 'namespace', 'page'],

    computed: {
      structure () {
        if (!this.app) return {}

        const namespace = kebabCase(this.namespace)

        return require(`@/applications/${this.app}/pages/${namespace}/${this.page}.json`)
      }
    },

    methods: { getComponent }
  }
</script>
