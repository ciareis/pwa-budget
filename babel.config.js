module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process')
          },
        },
      }
    },
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    }
  }
}
