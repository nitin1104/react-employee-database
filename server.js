var webpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

var complier = webpack(config);

var server = new webpackDevServer(complier, {
	content: 'public/',
	hot: true,
	publicPath: '/',
	state: { colors: true }
});

server.listen(3000, 'localhost', function(){
	console.log('The Server is running on localhost:3000 Press Ctrl + C to stop server');
})