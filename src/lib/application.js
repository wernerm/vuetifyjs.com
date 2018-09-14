import Vue from 'vue'

export default class Application {
  constructor (
    options = {}
  ) {
    this.bindComponents(options.components)
    this.bindRoutes(options.routes, options.routePriority)
  }

  bindComponents (components = {}) {
    Object.keys(components).forEach(key => {
      const component = components[key]

      Vue.component(key, component)
    })
  }

  bindRoutes (routes, routePriority) {
    this.routePriority = routePriority == null ? 0 : routePriority
    this.routes = routes
  }
}
