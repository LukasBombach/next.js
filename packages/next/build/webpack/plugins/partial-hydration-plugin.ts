import { Compiler } from 'webpack'

export class PartialHydrationPlugin {
  pluginName = this.constructor.name

  apply(compiler: Compiler) {
    compiler.hooks.normalModuleFactory.tap(this.pluginName, (factory) => {
      factory.hooks.beforeResolve.tap(this.pluginName, (result) =>
        console.log('beforeResolve', result)
      )
    })
  }
}
