const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const includePath = path.resolve(__dirname, '..');


/*
module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    }
};*/
const {
	VueLoaderPlugin
} = require('vue-loader');
const {
	loader
} = require('mini-css-extract-plugin');

module.exports = {
	// mode: 'development',
	mode: 'production',

	entry: {
		main: './static/script.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		// publicPuth: './dist'
	},
	devServer: {
		overLay: true,
	},
	


	module: {
		rules: [{

				test: /\.vue$/,

				use: [{
					loader: 'vue-loader',
				}, ]

			},

			// это будет применяться к файлам `.js`
			// А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
			{
				test: /\.js$/,
				//исключения
				exclude: (/node_modules/, /index.js/),
				loader: 'babel-loader'
			},
			// это будет применяться к файлам `.css`
			// А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
			{
				test: /\.css$/,
				// include: includePath,
				use: [{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(?:ico|woff|woff2|eot|ttf|svg|jpe?g|gif|png)$/i,
				// include: includePath,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},

			// {
			// 	test: /\.css$/,
			// 	exclude: (/node_modules/),

			// 	use: [{
			// 		loader: MiniCssExtractPlugin.loader
			// 	},'css-loader'],
			// },
			// {
			// 	test: /\.css$/i,
			// 	include: [
			// 		path.resolve(__dirname, 'css')
			// 	],

			// 	use: [
			// 		MiniCssExtractPlugin.loader,
			// 		'vue-style-loader',
			// 		"style-loader",
			// 		'css-loader'
			// 	]
			// },

		]
	},
	plugins: [

		new HtmlWebpackPlugin({
			template: './static/index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: './static/img',
				to: "./static/img"
			}, 
			{
				from: './static/sideJs/',
				to: "./sideJs/"
			}]

		}),
		// убедитесь что подключили плагин!
		new VueLoaderPlugin(),
		//new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
	],

}