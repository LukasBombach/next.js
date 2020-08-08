const dynamic = require('./dynamic').default
const hydrate = require('./hydrate')

module.exports = function (loadableFn) {
  return dynamic(hydrate(loadableFn))
}
