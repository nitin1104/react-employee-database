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
				loader : 'style-loader!css-loader'
			},
			{ 
				test: /\.png$/, 
				loader: "url-loader?limit=100000" 
			},
			{ 
				test: /\.jpg$/, 
				loader: "file-loader" 
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'url?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'file'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				loader: 'url?limit=10000&mimetype=image/svg+xml'
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