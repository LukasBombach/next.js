//import ReactDOM from 'react-dom'

module.exports = function (loadableFn) {
  // ReactDOM.hydrate

  if (typeof window !== 'undefined') {
    console.log('hydrate', loadableFn)
  }

  return loadableFn
}
