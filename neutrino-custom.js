const fs = require('fs')
const babelrcPresets = JSON.parse(fs.readFileSync('.babelrc', 'utf-8')).presets

module.exports = ({ config }) => config.module
  .rule('compile')
    .use('babel')
      .tap(options => {
        options.presets = babelrcPresets
        return options
      })
