'use strict';
var path                 = require('path');
var webpack              = require('webpack');
var HtmlWebpackPlugin    = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OpenBrowserPlugin    = require('open-browser-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry  : [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server', // do not reload whole page
		'react-hot-loader/patch',
		path.join(__dirname, '../app/index.js')
	],
	output : {
		path      : path.join(__dirname, '../dist/'),
		filename  : '[name].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			inject  : 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name]-dev.css",
		}),
		new OpenBrowserPlugin({url: 'http://localhost:3000'})
	],
	module : {
		rules: [
			{
				test   : /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader    : 'babel-loader'
			},
			{
				test  : /\.scss$/,
				use: [
					{
						loader : MiniCssExtractPlugin.loader,
						options: {},
					},
					'css-loader?modules=true&localIdentName=[local]!sass-loader'
				],
			}
		]
	}
};
