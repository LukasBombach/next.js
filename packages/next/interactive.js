const dynamic = require('./dynamic').default

module.exports = function (loadableFn) {
  console.log('loadableFn', loadableFn)
  return dynamic(loadableFn)
}
