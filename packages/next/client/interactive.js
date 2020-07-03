console.log('hello world interactive')

window.__NEXT_I = window.__NEXT_I || []

console.log('window.__NEXT_I', window.__NEXT_I)
;(async () => {
  for (const dependency of window.__NEXT_I) {
    console.log('Importing', dependency)
    // const source = await import(dependency)
    // console.log('source', source)
  }
})()
