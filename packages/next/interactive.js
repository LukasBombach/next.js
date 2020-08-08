const dynamic = require('./dynamic').default

const compomnentsToHydrate = []

function registerComponent(fn) {
  compomnentsToHydrate.push(fn)
  return dynamic(fn)
}

if (typeof window !== 'undefined') {
  window.__NEXT_HYDRATE_INTERACTIVE = function () {
    console.log('hydrating', compomnentsToHydrate)
  }
}

module.exports = registerComponent
