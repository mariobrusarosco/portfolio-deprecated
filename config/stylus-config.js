const path = require('path')
const miniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.styl$/,
  include: /src/,
  use: [
    process.env.production ? miniCSSExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
				importLoaders: 1,
				modules: true,
        localIdentName: '[name]__[hash:base64:8]'
      },
    },
		// 'postcss-loader',
		{
			loader: 'stylus-loader',
			options: {
				import: [
					path.resolve(__dirname, '../src/styles/config/mixins.styl'),
					path.resolve(__dirname, '../src/styles/config/variables.styl'),
					path.resolve(__dirname, '../src/styles/config/animations.styl'),
					// @TODO Check if there's a considerable amount of css bundle size by adding a main style file
					// as a 'gloal' variable => path.resolve(__dirname, '../src/styles/config/main.styl'),
				]
			}
		}

  ]
}
