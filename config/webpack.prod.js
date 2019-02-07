'use strict';
var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry  : [
		path.join(__dirname, '../app/index.js')
	],
	output : {
		path      : path.join(__dirname, '../dist/'),
		filename  : '[name].min.js',
		publicPath: ''
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			inject  : 'body',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].min.css",
		})
	],
	module : {
		rules: [
			{
				test   : /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader : 'babel-loader'
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
