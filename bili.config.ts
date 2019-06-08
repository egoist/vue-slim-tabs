import { Config } from 'bili'

const config: Config = {
  output: {
    format: ['cjs', 'umd', 'esm'],
    fileName({ format }) {
      if (format === 'umd') {
        return 'vue-slim-tabs.js'
      }
      return 'vue-slim-tabs.[format].js'
    },
    moduleName: 'VueSlimTabs'
  },
  banner: true
}

export default config
