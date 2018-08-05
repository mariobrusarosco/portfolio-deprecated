const webpack =  require('webpack'),
      webpackDevServer = require('webpack-dev-server'),
      config = require('./webpack.config')

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, (err) => {
  if(err) console.log(err)
  console.log('Listening at 3000')
})
