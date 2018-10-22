import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

export default {
  setParams: (state, payload) => {
    const { application, namespace, page } = payload

    state.application = 'guide'
    state.namespace = upperFirst(camelCase(namespace))
    state.page = upperFirst(camelCase(page))
  }
}
