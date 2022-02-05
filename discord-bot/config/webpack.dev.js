const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['yarn run:nodemon'],
        blocking: false,
        parallel: true
      }
    })
  ],
});