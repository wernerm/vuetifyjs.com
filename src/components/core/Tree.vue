<script>
  function getComponent (type) {
    switch (type) {
      case 'heading': return 'core-heading'
      case 'text': return 'core-text'
      case 'title': return 'core-title'
      case 'markup': return 'core-markup'
      case 'markdown': return 'core-markdown'
      case 'subtitle': return 'core-subtitle'
      default: return type
    }
  }
  export default {
    props: {
      children: {
        type: Array,
        default: () => ([])
      }
    },

    render (h) {
      const children = this.children.map(child => {
        if (child.children) {
          return h('core-tree', {
            props: { children: child.children }
          })
        }

        return h(getComponent(child.type), {
          props: { value: child.value }
        }, child.lang)
      })

      return h('div', children)
    }
  }
</script>
