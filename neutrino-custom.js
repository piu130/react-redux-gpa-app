module.exports = ({ config }) => config.module
  .rule('compile')
    .use('babel')
      .tap(options => {
        options.presets.push('stage-0')
        return options
      })
