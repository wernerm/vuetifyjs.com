const requireApplicationRoutes = require.context('./', true, /routes.js$/)
const requireApplicationStore = require.context('./', true, /vuex.js$/)

let routes = []

requireApplicationRoutes.keys().forEach(fileName => {
  routes = routes.concat(requireApplicationRoutes(fileName).default)
})

let stores = []

requireApplicationStore.keys().forEach(fileName => {
  stores = stores.concat(requireApplicationStore(fileName).default)
})

export {
  routes,
  stores
}
