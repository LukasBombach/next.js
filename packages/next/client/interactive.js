console.log('hello world interactive')

window.__NEXT_I = window.__NEXT_I || {}

console.log('window.__NEXT_I', window.__NEXT_I)
;(async () => {
  for (const dependency of Object.keys(window.__NEXT_I)) {
    console.log('Importing', dependency)
    // debugger
    const source = await import(dependency)
    console.log('source', source)
  }
})()
