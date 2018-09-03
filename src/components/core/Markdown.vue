<script>
  import marked from 'marked'

  export default {
    inject: {
      namespace: {
        default: undefined
      }
    },

    functional: true,

    props: {
      source: {
        type: String,
        default: ''
      },
      tag: {
        type: String,
        default: 'div'
      }
    },

    render (h, ctx) {
      const { children, data, injections, props } = ctx
      let code = props.source

      if (children) {
        code = children[0].text
      }

      if (injections.namespace) {
        code = ctx.parent.$t(`${injections.namespace}.${code}`)
      }

      return h(props.tag, {
        domProps: { innerHTML: marked(code) },
        ...data
      })
    }
  }
</script>
