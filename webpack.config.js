var webpack = require('webpack');

module.exports = {
	entry:  './src/main.js' ,
				
	output: {
		filename: 'bundle.js',
		path : 'public'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query : {
					presets : [ 'react' , 'es2015']
				}
			},

			{
				test : /\.(png|jpg)$/,
				exclude : /(node_modules)/,
				loader : 'url-loader?limit=20000'
			},

			{
				test : /\.css$/,
				exclude : /(node_modules)/,
				loader : 'style-loader!css-loader'
			}
		]

	},
	plugins : [
		new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
		}),
	]
}