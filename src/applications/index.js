const requireApplication = require.context('./', true, /routes.js$/)

let routes = []

requireApplication.keys().forEach(fileName => {
  routes = routes.concat(requireApplication(fileName).default)
})

export default routes
