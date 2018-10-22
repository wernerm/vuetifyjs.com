<template>
  <v-container fluid>
    <core-title>
      {{ structure.title }}
    </core-title>
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
      :key="`${composite}-${i}`"
      :is="getComponent(child.type)"
      :value="child"
    />
  </v-container>
</template>

<script>
  // Utilities
  import { getComponent } from '@/util/helpers'
  import kebabCase from 'lodash/kebabCase'
  import camelCase from 'lodash/camelCase'
  import upperFirst from 'lodash/upperFirst'

  // TODO: This is where 404 redirect will occur
  export default {
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
        required: true
      },
      namespace: {
        type: String,
        required: true
      },
      page: {
        type: String,
        required: true
      }
    },

    computed: {
      composite () {
        return `${this.app}-${this.namespace}-${this.page}`
      },
      structure () {
        const namespace = kebabCase(this.namespace)
        const page = upperFirst(camelCase(this.page))

        return require(`@/applications/${this.app}/pages/${namespace}/${page}.json`)
      }
    },

    methods: { getComponent }
  }
</script>
