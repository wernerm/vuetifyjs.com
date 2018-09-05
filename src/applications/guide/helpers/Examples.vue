<template>
  <div>
    <core-subtitle>Generic.Pages.examples</core-subtitle>
    <template v-for="(example, i) in value">
      <core-heading :key="`heading-${i}`">
        {{ `${namespace}.${page}.examples.${example}.header` }}
      </core-heading>

      <core-text :key="`text-${i}`">
        {{ `${namespace}.${page}.examples.${example}.desc` }}
      </core-text>

      <example
        :key="i"
        :file="`${kebabCase(page)}/${example}`"
      />
    </template>
  </div>
</template>

<script>
  // Utilities
  import kebabCase from 'lodash/kebabCase'

  export default {
    inject: ['namespace', 'page'],

    props: {
      value: {
        type: Array,
        default: () => ([])
      }
    },

    methods: { kebabCase }
  }
</script>
