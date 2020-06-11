const nextClientInteractiveLoader = function (source) {
  if (source.indexOf('next/interactive') === -1) {
    return source
  }
  let modules = '['
  let match
  // Hacky. The final version should grab
  // whatever the user defines inside of interactive() calls.
  let pattern = /import\s*\(\s*['"]\s*([^\s'"]+)\s*['"]\s*\)/g
  while ((match = pattern.exec(source))) {
    if (match && match[1]) {
      const path = JSON.stringify(match[1])
      // TODO figure out why with dynamic imports chunks loading is not working.
      modules += `[${path}, function () { return require(${path}); }],`
    }
  }
  if (modules.length === 1) {
    return source
  }
  modules += ']'

  return `
    // This should go to a main.js bundle.
    // Similarly to how __NEXT_P works,
    // this module should just push [name, loadFn] tuples to __NEXT_I
    // which will then take care of calling loadFn and render or hydrate.

    import React from 'react';
    import ReactDOM from 'react-dom';

    ;${modules}.forEach(([name, loadFn]) => {
      let scripts = document.querySelector(\`[data-next-interactive="\${name}"]\`)
      if (scripts) {
        const Component = loadFn()
        // loadFn().then(Component => {
          scripts = Array.from(document.querySelectorAll(\`[data-next-interactive="\${name}"]\`))
          if (scripts.length === 0) { return }
          scripts.forEach(script => {
            const data = JSON.parse(script.textContent)
            const container = script.parentNode
            script.removeAttribute('data-next-interactive')
            ReactDOM.render(React.createElement(Component.default || Component, data.props), container)
          })
        // })
      }
    })
  `
}

export default nextClientInteractiveLoader
